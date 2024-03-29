const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const SubService = require("../models/subService");
const Service = require("../models/service");
const { errorHandler } = require("./dbErrorHandler");

//fetching available sub-service by id
exports.subServiceById = (req, res, next, id) => {
  SubService.findById(id)
    .populate("service")
    .exec((err, subService) => {
      if (err || !subService) {
        return res.status(400).json({
          error: "Sub-Service Not found",
        });
      }
      req.subService = subService;
      next();
    });
};

//reading sub-service data along with photo
exports.read = (req, res) => {
  req.subService.photo = undefined;
  return res.json(req.subService);
};

//creating sub-service in particular service category
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
    const { name, description, price, service, status, location } = fields;

    if (!name || !description || !price || !service || !status || !location) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let subService = new SubService(fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }

      subService.photo.data = fs.readFileSync(files.photo.path);
      subService.photo.contentType = files.photo.type;
    }

    subService.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//removing sub-service if no longer needed
exports.remove = (req, res) => {
  let subService = req.subService;
  subService.remove((err, deletedSubService) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "SubService deleted successfully",
    });
  });
};

//updating the details of sub-service
exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let subService = req.subService;
    subService = _.extend(subService, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      subService.photo.data = fs.readFileSync(files.photo.path);
      subService.photo.contentType = files.photo.type;
    }

    subService.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//listing all the sub-service
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  SubService.find()
    .select("-photo")
    .populate("service")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, subServices) => {
      if (err) {
        return res.status(400).json({
          error: "SubServices not found",
        });
      }
      res.json(subServices);
    });
};

/**
 * it will find the subServices based on the req service category
 * other subServices that has the same service or category, will be returned
 */

exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  SubService.find({
    _id: { $ne: req.subService },
    service: req.subService.service,
  })
    .limit(limit)
    .populate("service", "_id name")
    .exec((err, subServices) => {
      if (err) {
        return res.status(400).json({
          error: "Sub-Services not found",
        });
      }
      res.json(subServices);
    });
};

exports.listLocationRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 10;

  SubService.find({
    _id: { $ne: req.subService },
    service: req.subService.service,
    location: req.subService.location,
  })
    .limit(limit)
    .populate("service", "_id name")
    .exec((err, subServices) => {
      if (err) {
        return res.status(400).json({
          error: "Sub-Services not found",
        });
      }
      res.json(subServices);
    });
};

exports.listServices = (req, res, next) => {
  SubService.distinct("service", {}, (err, services) => {
    if (err) {
      return res.status(400).json({
        error: "Services not found",
      });
    }
    res.json(services);
  });
  next();
};
//fetching photo will all the details

exports.photo = (req, res, next) => {
  if (req.subService.photo.data) {
    res.set("Content-Type", req.subService.photo.contentType);
    return res.send(req.subService.photo.data);
  }
  next();
};

exports.subServiceByServiceId = async (req, res) => {
  SubService.find({ service: req.params.serviceId })
    .populate("service", "_id name description")
    .exec((err, subServices) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(subServices);
    });
};

/**
 * list services-> sub-services by search
 * we will implement product search in react frontend
 * we will make api request and show the subServices to users based on what he wants
 */

//listing the search details
exports.listSearch = (req, res) => {
  // create query object to hold search value and location value
  const query = {};
  console.log("this api is getting hit");
  console.log(req.query);
  // assign search value to query.name
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };

    if (req.query.location && req.query.location != "other") {
      query.location = req.query.location;
      query.location = req.query.location;
    }
  }
  SubService.find(query, (err, subServices) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(subServices);
  }).select("-photo");
};

//searching controller of home page
exports.SearchList = (req, res) => {
  const query = {};
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };
    Service.find(query, (err, services) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(services);
    }).select("-photo");
  }
};
