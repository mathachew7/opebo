const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const {
  userById,
  read,
  update,
  orderHistory,
  // orderById,
  addUserAddress,
  addressByUserId,
} = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, orderHistory);
router.post("/user/addAddress/:userId", requireSignin, isAuth, addUserAddress);

router.get("/userAddress/:userId", addressByUserId);
router.param("userId", userById);

module.exports = router;
