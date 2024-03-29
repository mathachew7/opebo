exports.SignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter valid email address.")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  req
    .check("phone", "Phone is required")
    .matches(/^\d{10}$/)
    .withMessage("Enter valid phone number")
    .isLength({
      min: 10,
      max: 12,
    });
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.vendorSignUpValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter valid email address.")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  req
    .check("phone", "Phone is required")
    .matches(/^\d{10}$/)
    .withMessage("Enter valid phone number")
    .isLength({
      min: 10,
      max: 12,
    });
  req.check("gender", "Gender is required").notEmpty();
  req.check("dob", "Date of Birth is required").notEmpty();
  req.check("service", "Service is required").notEmpty();
  req.check("service_area", "Service area is required").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
//contactUs form validator here...
exports.contactUsValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();

  req
    .check("phone", "Phone is required")
    .matches(/^\d{10}$/)
    .withMessage("Enter valid phone number")
    .isLength({
      min: 9,
      max: 15,
    });
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter valid email address.")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("message", "Message is required!!").isLength({
    min: 20,
    max: 500,
  });
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

//subscribeUs form validator here .....
exports.subscribeUsValidation = (req, res, next) => {
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter valid email address.")
    .isLength({
      min: 4,
      max: 32,
    });
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.phoneValidator = (res, req, next) => {
  req
    .check("phone", "Phone Number Required.")
    .matches(/.+\@.+\..+/)
    .isLength({
      min: 4,
      max: 32,
    })
    .withMessage("Enter valid Phone Number.");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.AdminSignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter valid email address.")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
