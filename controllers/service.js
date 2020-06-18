const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Service = require("../models/service");
const { errorHandler } = require("../controllers/dbErrorHandler");

//fetch service data using service ID
exports.serviceById = (req, res, next, id) => {
  Service.findById(id)
    .populate("category")
    .exec((err, service) => {
      if (err || !service) {
        return res.status(400).json({
          error: "Service not found",
        });
      }
      req.service = service;
      next();
    });
};

//fetch service data using category ID
exports.serviceByCategoryId = async (req, res, id) => {
  Service.find({ category: req.params.categoryId })
    .populate("category", "_id name")
    .exec((err, services) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(services);
    });
};

//read service photo with service data
exports.read = (req, res) => {
  req.service.photo = undefined;
  return res.json(req.service);
};

//creating service
exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    const { name, description, category } = fields;

    if (!name || !description || !category) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let service = new Service(fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      service.photo.data = fs.readFileSync(files.photo.path);
      service.photo.contentType = files.photo.type;
    }

    service.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//removing service
exports.remove = (req, res) => {
  let service = req.service;
  service.remove((err, deletedService) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Service deleted successfully",
    });
  });
};

//updating service
exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let service = req.service;
    service = _.extend(service, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      service.photo.data = fs.readFileSync(files.photo.path);
      service.photo.contentType = files.photo.type;
    }

    service.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//sort the list of services that comes under its category
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Service.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, services) => {
      if (err) {
        return res.status(400).json({
          error: "Services not found",
        });
      }
      res.json(services);
    });
};

//fetch all the related services along with their categories
exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Service.find({ _id: { $ne: req.service }, category: req.service.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((err, services) => {
      if (err) {
        return res.status(400).json({
          error: "Services not found",
        });
      }
      res.json(services);
    });
};

exports.listCategories = (req, res) => {
  Service.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Categories not found",
      });
    }
    res.json(categories);
  });
};

exports.photo = (req, res, next) => {
  if (req.service.photo.data) {
    res.set("Content-Type", req.service.photo.contentType);
    return res.send(req.service.photo.data);
  }
  next();
};
/**
 * list services by search
 * we will implement service search in react frontend
 * we will make api request and show the services to users based on what they wants
 */

// exports.listSearch = (req, res) => {
//   // create query object to hold search value and location value
//   const query = {};
//   // assign search value to query.name
//   if (req.query.search) {
//     query.name = { $regex: req.query.search, $options: "i" };
//     // assign location value to query.location
//     if (req.query.location && req.query.location != "All") {
//       query.location = req.query.location;
//     }
//     // find the product based on query object with 1 property
//     // search and then push location with the link to open sub-services in that location
//     Service.find(query, (err, services) => {
//       if (err) {
//         return res.status(400).json({
//           error: errorHandler(err),
//         });
//       }
//       res.json(services);
//     }).select("-photo");
//   }
// };
