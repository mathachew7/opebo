const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vendor",
    },
    address_type: {
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
    zipcode: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VendorAddress", addressSchema);
