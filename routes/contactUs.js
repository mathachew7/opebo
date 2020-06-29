const express = require("express");
const router = express.Router();

const { requireSignin } = require("../controllers/auth");
const {
  createContactUs,
  ListContactMessage,
} = require("../controllers/contactUs");
const { contactUsValidator } = require("../validation");

router.post("/contact", contactUsValidator, createContactUs);
router.get("/listContactMessage/:adminId", requireSignin, ListContactMessage);

module.exports = router;
