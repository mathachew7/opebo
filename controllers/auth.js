const User = require("../models/user");
const UserToken = require("../models/verifyusertoken");
const Vendor = require("../models/vendor");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authorization check
const crypto = require("crypto");
const { errorHandler } = require("../controllers/dbErrorHandler");
require("dotenv").config();
var nodemailer = require("nodemailer");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const bcrypt = require("bcrypt");
//otp generator
var unirest = require("unirest");
var request = unirest("POST", "https://www.fast2sms.com/dev/bulk");

var transport = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  auth: {
    user: "info@opeboindustries.com", //example of generated by Mailtrap
    pass: "OpeBo1234@", //example of generated by Mailtrap
  },
});

console.log(process.env.MAIL_USERNAME);
exports.signup = (req, res) => {
  // console.log("req.body", req.body);
  const { phone } = req.body;
  User.findOne({ phone }, (err, phoneuser) => {
    if (phoneuser) {
      return res.status(400).json({
        error: "User with that phone number already exists, please SignIn",
      });
    }

    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      var mailOptions, link, token;
      token = jwt.sign({ user: _.pick(user, "id") }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      link = "http://localhost:3000/userVerify?id=" + token;

      var token = new UserToken({
        _userId: user._id,
        token: token,
      });
      token.save((err, token) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        mailOptions = {
          from: "info@opeboindustries.com",
          to: user.email,
          subject: "Please confirm your Email account",
          html:
            "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
            link +
            ">Click here to verify</a>",
        };
        transport.sendMail(mailOptions, (err, res) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          } else {
            return res.json({
              message: "Email Sent, please verify your account first",
            });
          }
        });
      });
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
        user,
      });
    });
  });
};

//user Sign In
exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup",
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesn't match",
      });
    }

    // if (!user.isVerified) {
    //   return res.status(401).json({
    //     error: "Your account has not been verified.",
    //   });
    // }
    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expireIn: new Date() + 9999 });
    // return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

//vendor SignUp
exports.vendorSignup = (req, res) => {
  // console.log("req.body", req.body);
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    const {
      name,
      email,
      password,
      phone,
      gender,
      dob,
      service,
      service_area,
      vendor_type,
    } = fields;
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !gender ||
      !dob ||
      !service ||
      !service_area ||
      !vendor_type
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let vendor = new Vendor(fields);
    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      vendor.photo.data = fs.readFileSync(files.photo.path);
      vendor.photo.contentType = files.photo.type;
    }
    // if (files.document) {
    //   // console.log("FILES PHOTO: ", files.photo);
    //   if (files.document.size > 2000000) {
    //     return res.status(400).json({
    //       error: "Image should be less than 2mb in size",
    //     });
    //   }
    //   vendor.document.data = fs.readFileSync(files.document.path);
    //   vendor.document.contentType = files.document.type;
    // }

    vendor.save((err, vendor) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      vendor.salt = undefined;
      vendor.hashed_password = undefined;
      res.json(vendor);
    });
  });
};

//Vendor Sign In
exports.vendorSignIn = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;

  Vendor.findOne({ email }, (err, vendor) => {
    if (err || !vendor) {
      return res.status(400).json({
        error: "Vendor with that email does not exist. Please signup",
      });
    }
    // if vendor is found make sure the email and password match
    // create authenticate method in vendor model
    if (!vendor.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesn't match",
      });
    }
    // generate a signed token with vendor id and secret
    const token = jwt.sign({ _id: vendor._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with vendor and token to frontend client
    const { _id, name, email, role } = vendor;
    return res.json({ token, vendor: { _id, email, name, role } });
  });
};

//admin login and signup
exports.adminSignup = (req, res) => {
  // console.log("req.body", req.body);
  const admin = new Admin(req.body);
  admin.save((err, admin) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    admin.salt = undefined;
    admin.hashed_password = undefined;
    res.json({
      admin,
    });
  });
};

//Vendor Sign In
exports.adminSignIn = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err || !admin) {
      return res.status(400).json({
        error: "Admin with that email does not exist. Please signup",
      });
    }
    // if admin is found make sure the email and password match
    // create authenticate method in admin model
    if (!admin.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesn't match",
      });
    }
    // generate a signed token with admin id and secret
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with admin and token to frontend client
    const { _id, name, email, role } = admin;
    return res.json({ token, admin: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Sign out success" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource! Access denied",
    });
  }
  next();
};

exports.userVerify = (req, res) => {
  UserToken.findOne({ token: req.params.token }, (err, userToken) => {
    if (err || !userToken) {
      return res.status(401).json({
        error: "Can't find the token ",
      });
    }
    User.findOne({ _id: userToken._userId }, (err, user) => {
      if (err || !userToken) {
        return res.status(403).json({
          error: "Can't find the token ",
        });
      }
      if (user.isVerified) {
        return res.status(400).json({
          message: "This user has already been verified.",
        });
      }
      user.isVerified = true;
      user.save((err, user) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          return res.status(400).json({
            message: "Verified, Now you can log in.",
          });
        }
      });
    });
  });
};
const generateOTP = () => {
  var digits = "0123456789";

  var otpLength = 6;

  var otp = "";

  for (let i = 1; i <= otpLength; i++) {
    var index = Math.floor(Math.random() * digits.length);

    otp = otp + digits[index];
  }

  return otp;
};
//user Sign In
exports.optSignIn = (req, res) => {
  //find the user based on phone
  const { phone } = req.body;
  User.findOne({ phone: phone }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that phone number does not exist. Please signup",
      });
    }
    const OTP = generateOTP();
    request.headers({
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      authorization:
        "XzAKsj490dSgaE5GBwfoWpmYFeC6uHUQkxMNl832TRJyrhqV1P2bIpwtHEliuVMFcGT8CYoA4jQvqy13",
    });
    request.form({
      sender_id: "OPEBOI",
      language: "english",
      route: "qt",
      numbers: phone,
      message: "23793",
      variables: "{#BB#}",
      variables_values: OTP,
    });
    request.end(function (res) {
      if (res.error) throw new Error(res.error);
    });
    // generate a signed token with otp and secret
    const token = jwt.sign({ otp: OTP }, process.env.JWT_SECRET);
    // persist the token as 'f' in cookie with expiry date
    res.cookie("f", token, { expireIn: new Date() + 500 });
    // return response with token and user phone to frontend client
    return res.json({ token, user: { phone } });
  });
};

exports.verifyOtp = (req, res) => {
  //console.log(req.cookies.token);
  const { token, phone, userInput } = req.body;
  const decrypted = jwt.verify(token, process.env.JWT_SECRET);
  if (userInput == decrypted.otp) {
    User.findOne({ phone: phone }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User with that phone number does not exist. Please signup",
        });
      }
      res.clearCookie("f");
      // generate a signed token with user id and secret
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      // persist the token as 't' in cookie with expiry date
      res.cookie("t", token, { expireIn: new Date() + 9999 });
      // return response with user and token to frontend client
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, email, name, role } });
    });
  } else {
    return res.status(400).json({
      error: "Incorrect OTP",
    });
  }
};
