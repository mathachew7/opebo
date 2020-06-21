const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const {
  vendorById,
  read,
  update,
  addVendorAddress,
  vendorUpdateDocument,
  addressByVendorId,
  vendorsByService,
  vendorsList,
} = require("../controllers/vendor");

router.get("/secret/:vendorId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    vendor: req.profile,
  });
});

router.get("/vendor/:vendorId", requireSignin, isAuth, read);
router.put("/vendor/:vendorId", requireSignin, isAuth, update);
router.post(
  "/vendor/addAddress/:vendorId",
  requireSignin,
  isAuth,
  addVendorAddress
);
router.put(
  "/vendor/updateDocument/:vendorId",
  requireSignin,
  isAuth,
  vendorUpdateDocument
);

router.get("/vendorsList", vendorsList);

router.get("/vendorsByService", vendorsByService);
router.get("/vendorAddress/:vendorId", addressByVendorId);
router.param("venodrId", vendorById);

module.exports = router;
