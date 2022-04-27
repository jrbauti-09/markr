const asyncHandler = require("express-async-handler");

// User.
const { User } = require("../../db/models");

// auth middleware.
const { setTokenCookie } = require("../../utils/auth.js");

const router = require("express").Router();

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
