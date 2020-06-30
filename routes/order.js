const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const {
  create,
  listOrders,
  getStatusValues,
  orderById,
  singleOrder,
  updateOrderStatus,
} = require("../controllers/order");

router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  create,
  addOrderToUserHistory
);

router.get("/admin/order/list/:adminId", requireSignin, listOrders);

router.get(
  "/order/status-values/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  getStatusValues
);
router.put(
  "/order/:orderId/status/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);
router.get("/singleOrder/:orderId", singleOrder);
router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;
