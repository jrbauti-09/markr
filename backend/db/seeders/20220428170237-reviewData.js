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
        {
          userId: 3,
          landMarkId: 7,
          review:
            "It feels so surreal to see this landmark. Such an amazing feeling of empowerment!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 7,
          review:
            "This symbol of freedom and justice is one of the core principles of the United States. Amazing place!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          landMarkId: 7,
          review: "The view up top is great!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          landMarkId: 8,
          review:
            "The building is located right between Farm Cove and Sydney Cove, overlooking Sydney Harbor. Also, behind the Opera House, it is possible to find a beautiful public park.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 8,
          review:
            "The Opera House is known for its wonderful location and also incredible acoustic.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 8,
          review:
            "The Sydney Opera House located at 2A Macquarie Street in Sydney harbor is arguably one of the most recognizable and known opera houses in the world.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          landMarkId: 9,
          review:
            "We visited the tower and surrounding attractions as part of a walking tour, not essential to do this but makes the visit a bit more interesting to know the history, inside the tower it's very narrow and there are plenty of steps to climb but it's definitely worth while doing it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          landMarkId: 9,
          review:
            "Children really enjoyed the whole experience, thankfully not too busy when we were there. Fun photos & the views were beautiful from the leaning tower.",
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
