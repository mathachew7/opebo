const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "Not Approved",
      //1. approved
      //2. not approved
    },
    completed: {
      type: Boolean,
      default: false,
    },

    gender: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    dob: {
      type: Date,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 2,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VendorAddress",
    },
    history: {
      type: Array,
      default: [],
    },
    service: {
      type: String,
      required: true,
    },
    service_area: {
      type: String,
      required: true,
    },
    vendor_type: {
      type: String,
      required: true,
      //student, professional , gov, private
    },
    organizationName: {
      type: String,
    },
    age: {
      type: String,
    },
    occupation: {
      type: String,
    },
    experience: {
      type: String,
    },
    purpose: {
      type: String,
    },
    doc: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

// virtual field
vendorSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

vendorSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("Vendor", vendorSchema);
