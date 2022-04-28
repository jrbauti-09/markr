"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Landmarks",
      [
        {
          userId: 1,
          name: "Eiffel Tower",
          imageUrl: "https://w.wallhaven.cc/full/6q/wallhaven-6qmzj6.jpg",
          description:
            "The Eiffel tower is a puddled iron structure, an iron that has lost some of its carbon and therefore rusts less quickly. It is pyramidal in shape with slightly curved sides. It measures 324m high and is divided into 4 parts separated by a floor.",
          lat: 48.8584,
          lng: 2.2945,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Colosseum",
          imageUrl: "https://w.wallhaven.cc/full/43/wallhaven-43g6xd.jpg",
          description:
            "The Colosseum is an amphitheatre built in Rome under the Flavian emperors of the Roman Empire. It is also called the Flavian Amphitheatre. It is an elliptical structure made of stone, concrete, and tuff, and it stands four stories tall at its highest point.",
          lat: 41.8902,
          lng: 12.4922,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Taj Mahal",
          imageUrl: "https://w.wallhaven.cc/full/43/wallhaven-4351k6.jpg",
          description:
            "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
          lat: 27.1751,
          lng: 78.0421,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Golden Gate Bridge",
          imageUrl: "https://w.wallhaven.cc/full/nz/wallhaven-nzqzzj.jpg",
          description:
            "Golden Gate Bridge is a suspension bridge across the place the where San Francisco Bay opens into the Pacific Ocean, so-called Golden Gate (hence the name). It connects San Francisco with Marin County and it is 2737 meters long and 227 meters high. Some 45 million of vehicles cross Golden Gate Bridge in a year.",
          lat: 37.8199,
          lng: 122.4783,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "La Sagrada Familia",
          imageUrl:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/03DB/production/_97778900_df00cf9e-2d5a-4cf8-8961-480156a86e5c.jpg",
          description:
            "The Sagrada Família is famous for being one of the most iconic examples of Antoni Gaudí's unique style, combining elements of Art Nouveau, Catalan Modernism and Spanish Late Gothic design. The theme of nature figures prominently in Gaudí's design, both in terms of symbolism and the use of organic shapes and forms.",
          lat: 41.4036,
          lng: 2.1744,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Chichen Itza",
          imageUrl:
            "https://www.roadaffair.com/wp-content/uploads/2021/02/el-castillo-temple-kukulcan-chichen-itza-mexico-shutterstock_517079560.jpg",
          description:
            "Chichén Itzá, ruined ancient Maya city occupying an area of 4 square miles (10 square km) in south-central Yucatán state, Mexico. It is thought to have been a religious, military, political, and commercial centre that at its peak would have been home to 35,000 people.",
          lat: 20.6843,
          lng: 88.5678,
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
