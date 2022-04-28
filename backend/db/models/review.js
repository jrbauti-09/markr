"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: DataTypes.INTEGER,
      landMarkId: DataTypes.INTEGER,
      review: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Landmark, { foreignKey: "landMarkId" });
  };
  return Review;
};
