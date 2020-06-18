const express = require("express");
const router = express.Router();

const {
  create,
  serviceById,
  read,
  update,
  remove,
  list,
  //listSearch,
  listRelated,
  listCategories,
  photo,
  serviceByCategoryId,
} = require("../controllers/service");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { adminById } = require("../controllers/admin");

router.get("/service/:serviceId", read);
router.post("/service/create/:adminId", requireSignin, isAuth, isAdmin, create);

router.delete(
  "/service/:serviceId/:adminId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.put(
  "/service/:serviceId/:adminId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/services", list);
// router.get("/services/search", listSearch);
router.get("/services/related/:serviceId", listRelated);
router.get("/services/categories", listCategories);
router.get("/services/:categoryId", serviceByCategoryId);

router.get("/service/photo/:serviceId", photo);
router.param("adminId", adminById);
router.param("serviceId", serviceById);

module.exports = router;
