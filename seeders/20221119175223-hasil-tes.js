'use strict';


const hasilTes = [
  {
    user_id: 2,
    nilai: 35,
    kesimpulan : "Depresi Sedang",
    type: "bdi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 2,
    kesimpulan: "psikolog",
    type: "self-awareness",
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
