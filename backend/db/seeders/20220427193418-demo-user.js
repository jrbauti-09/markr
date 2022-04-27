"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jrbauti1@gmail.com",
          username: "UpstartJosh",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pemiran@gmail.com",
          username: "pemiran",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "UpstartJosh", "pemiran"] },
      },
      {}
    );
  },
};
