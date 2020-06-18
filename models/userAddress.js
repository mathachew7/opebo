const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    full_name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 6,
    },
    town: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserAddress", addressSchema);
