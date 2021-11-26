'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        phone: "89081713610",
        email: 'antonov.max.v@yandex.ru',
        birthday: '19.09.1985',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89535553535",
        email: 'escobar@gmail.com',
        birthday: '23.01.1967',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89536718967",
        email: 'cobain@gmail.com',
        birthday: '12.09.1979',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89994567821",
        email: 'hendrix@mail.ru',
        birthday: '31.05.1959',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        phone: "89718818281",
        email: 'sinatra@yandex.ru',
        birthday: '30.06.1945',
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
