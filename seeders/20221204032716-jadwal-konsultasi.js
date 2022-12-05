'use strict';

const { faker } = require('@faker-js/faker');

const jadwalpsikolog = [...Array(100)].map((jadwal) => (
  {
      tanggal: faker.date.between('2022-12-01', '2022-12-31'),
      jam: faker.helpers.arrayElement(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']),
      user_id: faker.helpers.arrayElement([13,14,15]),
      createdAt: new Date(),
      updatedAt: new Date()
  }
))


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('jadwalpsikologs', jadwalpsikolog, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
