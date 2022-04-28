'use strict';
module.exports = (sequelize, DataTypes) => {
  const Landmark = sequelize.define('Landmark', {
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Landmark.associate = function(models) {
    // associations can be defined here
  };
  return Landmark;
};