const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { User, Landmark, Review } = db;

// Begins with api/landmarks.

// Get all landmarks database.
//Check and tested on postman.
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const landmark = await Landmark.findAll();

    res.json({
      landmark,
    });
  })
);

module.exports = router;
