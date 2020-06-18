const Vendor = require("../models/vendor");
const VendorAddress = require("../models/vendorAddress");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.vendorById = (req, res, next, id) => {
  Vendor.findById(id).exec((err, vendor) => {
    if (err || !vendor) {
      return res.status(400).json({
        error: "Opps Sign in required to proceed",
      });
    }
    req.profile = vendor;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.profile.photo = undefined;
  res.profile.document = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => {
  Vendor.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, vendor) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action",
        });
      }
      vendor.hashed_password = undefined;
      vendor.salt = undefined;
      res.json(vendor);
    }
  );
};

//adding address to vendor account
exports.addVendorAddress = (req, res, next) => {
  const address = new VendorAddress(req.body);
  address.vendor = req.profile._id;

  Vendor.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { address: address._id } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "Could not update vendor address",
        });
      }
      next();
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

exports.vendorsByStatus = (req, res) => {
  Vendor.find({ status: req.params.status }).exec((err, vendors) => {
    if (err) {
      return res.status(400).json({
        error: "Vendors not found",
      });
    }
    res.json(vendors);
  });
};

exports.vendorsByServiceArea = (req, res) => {
  Vendor.find({ service_area: req.body.serviceArea }).exec((err, vendors) => {
    if (err) {
      return res.status(400).json({
        error: "Vendors not found",
      });
    }
    res.json(vendors);
  });
};

exports.vendorUpdateDocument = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let vendor = req.vendor;

    vendor.completed = true;
    vendor = _.extend(vendor, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.doc) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.doc.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      vendor.doc.data = fs.readFileSync(files.doc.path);
      vendor.doc.contentType = files.doc.type;
    }

    vendor.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};
