'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        phone: "89081713610",
        email: 'antonov.max.v@yandex.ru',
        birthday: "1985-09-19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89535553535",
        email: "escobar@gmail.com",
        birthday: '1967-11-12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89536718967",
        email: "cobain@gmail.com",
        birthday: '1979-12-12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89994567821",
        email: "hendrix@mail.ru",
        birthday: '1959-05-04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89718818281",
        email: "sinatra@yandex.ru",
        birthday: '1945-08-02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
      {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
