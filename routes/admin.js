const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { adminById, read, update } = require("../controllers/admin");

router.get("/secret/:adminId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    admin: req.profile,
  });
});

router.get("/admin/:adminId", requireSignin, isAdmin, read);
router.put("/admin/:adminId", requireSignin, isAdmin, update);

router.param("adminId", adminById);

module.exports = router;
