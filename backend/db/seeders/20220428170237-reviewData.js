"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          landMarkId: 1,
          review:
            "Had an amazing trip in Paris. The Eiffel Tower is way taller in person. Would recommend visiting!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 1,
          review:
            "The view on top of the Eiffel Tower was amazing. I am still at awe by the fact they built this in 1889!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 2,
          review:
            "I went there with my sister for vacation. The place was rich in history and culture. I cannot imagine the gladiator fights taking place back then..",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 2,
          review: "Will definitely plan a trip there soon! Thanks for sharing!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          landMarkId: 3,
          review: "This place was beautiful 10/10 recommend!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 3,
          review: "I wanna go here, gonna plan a trip soon!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 4,
          review:
            "The drive across the bridge was a refreshing experience. I love the weather here!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 4,
          review: "What an engineering marvel this bridge is!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          landMarkId: 5,
          review:
            "The amount of detail the architects put into this church is marvelous!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 5,
          review:
            "I think this architectural art-piece is great for aspiring architects.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 6,
          review:
            "Woah, I visited this place and I must say it is way more impressive in person. Also, I did not know that when you clap in front of the pyramid the sound echoes to the top and makes a bird noise.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 6,
          review: "I wanna experience that as well! Thank you for sharing! :)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
