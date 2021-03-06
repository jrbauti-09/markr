const express = require("express");
const asyncHandler = require("express-async-handler");

// Validator utils.
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
// Auth utils.
const { setTokenCookie, requireAuth } = require("../../utils/auth");
// User model.
const { User } = require("../../db/models");

const router = express.Router();

// Begins with api/users

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];
// Will house resources for route paths beginning with /api/users
// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Checked with postman. good to go.
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const allUsers = await User.findAll();

    return res.json({
      allUsers,
    });
  })
);

module.exports = router;
