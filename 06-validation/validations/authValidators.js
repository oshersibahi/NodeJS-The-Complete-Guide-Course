const User = require("../models/user");

exports.isEmailExist = (value, { req }) => {
  // if (value === 'test@test.com') {
  //   throw new Error('This email address if forbidden.');
  // }
  // return true;
  return User.findOne({ email: value }).then((userDoc) => {
    if (userDoc) {
      return Promise.reject(
        "E-Mail exists already, please pick a different one."
      );
    } else {
      return true;
    }
  });
};

exports.isConfirmPasswordMatch = (value, { req }) => {
  if (value !== req.body.password) {
    throw new Error("Passwords have to match!");
  }
  return true;
};

