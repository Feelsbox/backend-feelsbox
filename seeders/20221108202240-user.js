'use strict';

const bcrypt = require('bcrypt');


const user = [
  {
      code: '1',
      name: 'Kontol',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync("admin",10),
      role: 'admin',
      jenis_kelamin: 'Laki-laki',
      umur: '20',
      domisili: 'Jakarta',
      jenis_pekerjaan: 'Mahasiswa',
      lokasi: 'Jakarta',
  },
  {
      code: '2',
      name: 'User',
      email: 'tes@gmail.com',
      password: bcrypt.hashSync("aaa",10),
      role: 'user',
      jenis_kelamin: 'Laki-laki',
      umur: '20',
      domisili: 'Jakarta',
      jenis_pekerjaan: 'Mahasiswa',
      lokasi: 'Jakarta',
  }
]

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
    await queryInterface.bulkInsert('Users', user, {});
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
