const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  vendorSignup,
  vendorSignIn,
  adminSignIn,
  adminSignup,
  userVerify,
  optSignIn,
  verifyOtp,
} = require("../controllers/auth");

const {
  SignupValidator,
  phoneValidator,
  AdminSignupValidator,
  vendorSignUpValidator,
} = require("../validation");

//user path for signin and signup
router.post("/signin", signin);
router.post("/signup", SignupValidator, signup);
router.post("/signInPhone", optSignIn);
router.post("/verifyOtp", verifyOtp);
router.get("/userVerify/:token", userVerify);

//vendor path for signin and signup
router.post("/vendorSignIn", vendorSignIn);
router.post("/vendorSignup", vendorSignUpValidator, vendorSignup);

//admin path for signin and signup
router.post("/adminSignIn", adminSignIn);
router.post("/adminSignup", AdminSignupValidator, adminSignup);

//signOut for everyone
router.get("/signout", signout);

module.exports = router;
