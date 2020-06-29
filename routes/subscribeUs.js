const express = require("express");
const router = express.Router();

const { createSubscribeUs } = require("../controllers/subscribeUs");
const { subscribeUsValidation } = require("../validation");

router.post("/subscribe", subscribeUsValidation, createSubscribeUs);

module.exports = router;
