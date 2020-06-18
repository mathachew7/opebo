const ContactUs = require("../models/contactUs");
const { errorHandler } = require("../controllers/dbErrorHandler");
require("dotenv").config();
var nodemailer = require("nodemailer");

//mail function for sending mail
transport = nodemailer.createTransport({
  host: "server.hackerkernel.co",
  port: 465,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

//creating Contact US
exports.createContactUs = (req, res) => {
  // console.log("req.body", req.body);
  const contact = new ContactUs(req.body);
  contact.save((err, contact) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      contact,
    });

    var contactPerson = {
      from: "no-reply@opeboindustries.com",
      to: contact.email,
      subject: "ContactUs from Opebo",

      html: `
      <h1>Thank you contacting Us. Our team will reach you as soon as possible.</h1>
      <h2> Your Details of Enquiry </h2>
      <h3>Full Name: ${contact.name}</h3>
      <h3>Phone: ${contact.phone}</h3>
      <h3>Email: ${contact.email}</h3>
      <h3>Message: ${contact.message}</h3>
      `,
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
    var adminMail = {
      from: "no-reply@opeboindustries.com",
      to: "changethegame46@gmail.com",
      subject: "ContactUs form submission ",

      html: `
      <h1>Hey Admin, Somebody tried to contact you from opebo ContactUs from. Here is the details.</h1>
      <h3>Full Name: ${contact.name}</h3>
      <h3>Phone: ${contact.phone}</h3>
      <h3>Email: ${contact.email}</h3>
      <h3>Message: ${contact.message}</h3>
      `,
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
    transport.sendMail(contactPerson, (error, info) => {
      if (error) {
        return console.log(error);
      }
      //   console.log("Email sent: " + info.response);
    });
    transport.sendMail(adminMail, (error, info) => {
      if (error) {
        return console.log(error);
      }
      //   console.log("Email sent: " + info.response);
    });
  });
};
