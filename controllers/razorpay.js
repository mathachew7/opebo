"use strict";
var Razorpay = require("razorpay");
require("dotenv").config();

var instance = new Razorpay({
  key_id: process.env.KEY_ID_TEST,
  key_secret: process.env.KEY_SECRET_TEST,
});

exports.createPayment = (req, res) => {
  const { payment_id } = req.params;
  const amount = Number(req.params.amount * 100);
  instance.payments
    .capture(payment_id, amount)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};

exports.refundPayment = (req, res) => {
  const { payment_id } = req.params;
  instance.payments
    .refund(payment_id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};
