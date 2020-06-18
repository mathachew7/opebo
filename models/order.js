const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const SingleOrderSchema = new mongoose.Schema(
  {
    subService: { type: ObjectId, ref: "SubService" },
    name: String,
    price: String,
    count: Number,
    service: String,
    status: {
      type: String,
      default: "Booking Received",
    },
    updated: Date,
    vendor: { type: ObjectId, ref: "Vendor" },
  },
  { timestamps: true }
);

const SingleOrder = mongoose.model("SingleOrder", SingleOrderSchema);

const orderSchema = new mongoose.Schema(
  {
    orders: [SingleOrderSchema],
    transaction_id: {},
    amount: { type: Number },
    address: {},
    user: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, SingleOrder };
