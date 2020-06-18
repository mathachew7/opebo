const User = require("../models/user");
const { errorHandler } = require("../controllers/dbErrorHandler");
// var unirest = require("unirest");
// const jwt = require("jsonwebtoken");

// var request = unirest("POST", "https://www.fast2sms.com/dev/bulk");

//user Sign In
exports.optSignIn = (req, res) => {
  console.log("this api is getting hit");
  // find the user based on email
  // const { phone } = req.body;
  // User.findOne({ phone }, (err, phone) => {
  //   if (err || !user) {
  //     return res.status(400).json({
  //       error: "User with that phone number does not exist. Please signup",
  //     });
  //   }
  //   request.headers({
  //     "content-type": "application/x-www-form-urlencoded",
  //     "cache-control": "no-cache",
  //     authorization: "YOUR_API_KEY",
  //   });
  //   request.form({
  //     sender_id: "FSTSMS",
  //     language: "english",
  //     route: "qt",
  //     numbers: "9999999999,8888888888,7777777777",
  //     message: "YOUR_QT_SMS_ID",
  //     variables: "{#AA#}|{#CC#}",
  //     variables_values: "123456787|asdaswdx",
  //   });
  //   request.end(function (res) {
  //     if (res.error) throw new Error(res.error);
  //     console.log(res.body);
  //   });
  // });
};
