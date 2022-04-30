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
    // console.log(landmark);
    res.json({
      landmark,
    });
  })
);

// Post a landmark to database.
// Will need csurfFetch.
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, name, imageUrl, description, lat, lng } = req.body;

    const newLandmark = await Landmark.create({
      userId,
      name,
      imageUrl,
      description,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });

    res.json({
      newLandmark,
    });
  })
);

// Get landmarks based on userId.
// Checked on postman, working.
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;

    const userLandmarks = await Landmark.findAll({
      where: {
        userId,
      },
    });

    res.json({
      userLandmarks,
    });
  })
);

module.exports = router;
