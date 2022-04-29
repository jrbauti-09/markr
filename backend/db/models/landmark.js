"use strict";
module.exports = (sequelize, DataTypes) => {
  const Landmark = sequelize.define(
    "Landmark",
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    },
    {}
  );
  Landmark.associate = function (models) {
    // associations can be defined here
    Landmark.belongsTo(models.User, { foreignKey: "userId" });
    Landmark.hasMany(models.Review, { foreignKey: "landMarkId" });
  };
  return Landmark;
};
