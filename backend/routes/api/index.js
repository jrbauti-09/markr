const asyncHandler = require("express-async-handler");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const landmarksRouter = require("./landmarks.js");
const reviewsRouter = require("./reviews.js");

const router = require("express").Router();

// auth middleware.
const { setTokenCookie } = require("../../utils/auth.js");
// User.
const { User } = require("../../db/models");

// Gateway to multiple routes.

// Begins with /api
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/landmarks", landmarksRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
