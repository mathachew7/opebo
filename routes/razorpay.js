const express = require("express");
const router = express.Router();
const { createPayment, refundPayment } = require("../controllers/razorpay");

router.get("/api/v1/rzp_capture/:payment_id/:amount", createPayment);

router.get("/api/v1/rzp_refunds/:payment_id", refundPayment);

module.exports = router;
