const express = require("express");
const { check, body } = require("express-validator/check");

const authController = require("../controllers/auth");
const authValidators = require("../validations/authValidators");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
  "/login",
  [
    body(
      "email",
      "E-mail is invalid, please enter write it in a right format."
    ).isEmail(),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({
        min: 5,
      })
      .isAlphanumeric(),
  ],
  authController.postLogin
);

router.post(
  "/signup",
  [
    check("email", "Please enter a valid email.")
      .isEmail()
      .custom(authValidators.isEmailExist),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric(),
    body("confirmPassword").custom(authValidators.isConfirmPasswordMatch),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
