const SubscribeUS = require("../models/subscribeUs");
const { errorHandler } = require("../controllers/dbErrorHandler");

require("dotenv").config();
var nodemailer = require("nodemailer");

transport = nodemailer.createTransport({
  host: "server.hackerkernel.co",
  port: 465,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
//creating Subscribe US
exports.createSubscribeUs = (req, res) => {
  // console.log("req.body", req.body);
  const { email } = req.body;
  SubscribeUS.findOne({ email }, (err, data) => {
    if (data) {
      return res.status(400).json({
        error: "You have already Subscribed us.",
      });
    }
    const subscribe = new SubscribeUS(req.body);
    subscribe.save((err, subscribe) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        subscribe,
      });
      var mailOptions = {
        from: "no-reply@opeboindustries.com",
        to: subscribe.email,
        subject: "Subscription Info",

        html: "<h1>Thank You for subscribing us. Opebo</h1>",
        //   attachments: [
        //     {
        //       // utf-8 string as an attachment
        //       filename: "text.txt",
        //       content: "Attachments",
        //     },
        //     {
        //       filename: "logo",
        //       path: "newlogo.png",
        //     },
        //   ],
      };
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        //   console.log("Email sent: " + info.response);
      });
    });
  });
};
