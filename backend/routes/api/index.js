const asyncHandler = require("express-async-handler");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

const router = require("express").Router();

// auth middleware.
const { setTokenCookie } = require("../../utils/auth.js");
// User.
const { User } = require("../../db/models");

// Gateway to multiple routes.

// Begins with /api
router.use("/session", sessionRouter);
router.use("/users", usersRouter);

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
