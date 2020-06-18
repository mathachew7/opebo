const User = require("../models/user");
const UserAddress = require("../models/userAddress");
const { Order } = require("../models/order");
const { errorHandler } = require("../controllers/dbErrorHandler");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Oops! Signin required to proceed",
      });
    }
    req.profile = user;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action",
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

exports.addOrderToUserHistory = (req, res, next) => {
  let history = [];
  let items = [];

  console.log(req.orderId);

  req.body.order.orders.forEach((item) => {
    items.push({
      _id: item.subService,
      name: item.name,
      count: item.count,
      price: item.price,
      service: item.service,
    });
  });

  history.push({
    order_id: req.orderId,
    transaction_id: req.body.order.transaction_id,
    total_paid: req.body.order.amount,
    items: items,
  });

  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { history: history } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "Could not update user order history",
        });
      }
      return res.status(200).json({
        message: "History updated to user",
      });
      next();
    }
  );
};

exports.orderHistory = (req, res) => {
  Order.find({ user: req.profile._id })
    .populate("user", "_id name")
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(orders);
    });
};

//adding address to user account
exports.addUserAddress = (req, res, next) => {
  const address = new UserAddress(req.body);
  address.user = req.profile._id;
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { address: address._id } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "Could not update user address",
        });
      }
    }
  );
  address.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.addressByUserId = (req, res) => {
  UserAddress.find({ user: req.profile._id }).exec((err, address) => {
    console.log(address);
    if (err || !address) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ address });
  });
};
