const express = require("express");
const router = express.Router();

const { createContactUs } = require("../controllers/contactUs");
const { contactUsValidator } = require("../validation");

router.post("/contact", contactUsValidator, createContactUs);

module.exports = router;
