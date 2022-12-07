'use strict';


const hasilTes = [
  {
    user_id: 2,
    bdi: 35,
    keterangan: "Depresi ringan",
    awareness: "Anda Harus Ke Psikolog",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // {
  //   user_id: 2,
  //   kesimpulan: "sehat",
  //   type: "self-diagnose",
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // }
]

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
      await queryInterface.bulkInsert('HasilTes', hasilTes, {})
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
