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
          lng: -122.4783,
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
          lng: -88.5678,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Statue of Liberty",
          imageUrl:
            "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VKFZOBUTVNFNVBUKSS77AKAKTI.JPEG",
          description:
            "Statue of Liberty, formally Liberty Enlightening the World, colossal statue on Liberty Island in the Upper New York Bay, U.S., commemorating the friendship of the peoples of the United States and France. Standing 305 feet (93 metres) high including its pedestal, it represents a woman holding a torch in her raised right hand and a tablet bearing the adoption date of the Declaration of Independence (July 4, 1776) in her left. The torch, which measures 29 feet (8.8 metres) from the flame tip to the bottom of the handle, is accessible via a 42-foot (12.8-metre) service ladder inside the arm (this ascent was open to the public from 1886 to 1916). An elevator carries visitors to the observation deck in the pedestal, which may also be reached by stairway, and a spiral staircase leads to an observation platform in the figure’s crown. A plaque at the pedestal's entrance is inscribed with a sonnet, “The New Colossus” (1883) by Emma Lazarus. It was written to help raise money for the pedestal, and it reads:",
          lat: 40.6892,
          lng: -74.0445,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Sydney Opera House",
          imageUrl:
            "https://media.cntraveler.com/photos/57d1aa6fb77fe35639ae19bf/16:9/w_2560%2Cc_limit/GettyImages-464378925.jpg",
          description:
            "The Sydney Opera House, located in Sydney, New South Wales, Australia, is one of the most famous performing arts venues in the world. Designed by Jørn Utzon, a Danish architect, the Sydney Opera House is one of the most distinctive and famous twentieth-century buildings. Opened in 1973, it was designated a UNESCO World Heritage Site as of June 27, 2007. Situated on Bennelong Point in Sydney Harbor, with park land to its south and close to the equally famous Sydney Harbour Bridge, the building and its surroundings form an iconic Australian image. It is also famous for lengthy delays in its completion, huge cost overruns, and a stormy relationship between designer and client which led to Utzon's resignation from the project in 1966 before its completion.",
          lat: -33.8568,
          lng: 151.2153,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Leaning Tower of Pisa",
          imageUrl:
            "https://images.ctfassets.net/cnu0m8re1exe/1tI0J6fFR4TQAU7YApSjcE/3aedcf058c5f2cd9212b86731541ac3d/shutterstock_745306897.jpg",
          description:
            "Giovanni di Simone, the engineer in charge when construction resumed, sought to compensate for the lean by making the new stories slightly taller on the short side, but the extra masonry caused the structure to sink still further. The project was plagued with interruptions, as engineers sought solutions to the leaning problem, but the tower was ultimately topped out in the 14th century. Twin spiral staircases lined the tower’s interior, with 294 steps leading from the ground to the bell chamber (one staircase incorporates two additional steps to compensate for the tower's lean). Over the next four centuries the tower's seven bells were installed; the largest weighed more than 3,600 kg (nearly 8,000 pounds). By the early 20th century, however, the heavier bells were silenced, as it was believed that their movement could potentially worsen the tower's lean.",
          lat: 43.723,
          lng: 10.3966,
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
