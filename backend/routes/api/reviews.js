const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const { User, Landmark, Review } = db;

// Begins with api/reviews.

// Get all reviews based on landmarkId.
// Check and tested on Postman.
router.get(
  "/:landmarkId",
  asyncHandler(async (req, res, next) => {
    const landMarkId = req.params.landmarkId;

    const reviews = await Review.findAll({
      where: {
        landMarkId,
      },
    });

    res.json({
      reviews,
    });
  })
);
// Post a review on landmarkId.
router.post(
  "landmarks/:landmarkId",
  asyncHandler(async (req, res, next) => {
    const landMarkId = req.params.landmarkId;
    const { userId, review } = req.body;

    const newReview = await Review.create({
      userId,
      landMarkId,
      review,
    });

    if (newReview) {
      res.json({
        newReview,
      });
    }
  })
);

module.exports = router;
