const express = require("express");
const router = express.Router();

const {
  create,
  subServiceById,
  read,
  remove,
  update,
  list,
  listRelated,
  listServices,
  photo,
  listSearch,
  subServiceByServiceId,
  listLocationRelated,
  SearchList,
} = require("../controllers/subService");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { adminById } = require("../controllers/admin");

router.get("/subService/:subServiceId", read);
router.post(
  "/subService/create/:adminId",
  requireSignin,
  isAuth,
  isAdmin,
  create
);
router.delete(
  "/subService/:subServiceId/:adminId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/subService/:subServiceId/:adminId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get("/subServices", list);
router.get("/services/search", listSearch);

router.get("/search", SearchList);

router.get("/subServices/related/:subServiceId", listRelated);
router.get("/subServices/location/related/:subServiceId", listLocationRelated);

router.get("/subServices/services", listServices);

router.get("/subService/photo/:subServiceId", photo);
router.get("/subServices/:serviceId", subServiceByServiceId);

router.param("adminId", adminById);
router.param("subServiceId", subServiceById);

module.exports = router;
