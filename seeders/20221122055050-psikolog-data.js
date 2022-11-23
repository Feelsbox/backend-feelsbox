'use strict';

const psikolog = [
  {
    user_id: 13,
    nomor: "01-52C-5735",
    spesialisasi: "keluarga",
    surat_izin: "images/surat-izin/default.pdf"
  },{
    user_id: 14,
    nomor: "01-52C-5735",
    spesialisasi: "asmara",
    surat_izin: "images/surat-izin/default.pdf"

  },
  {
    user_id: 15,
    nomor: "01-52C-5735",
    spesialisasi: "pengembangan diri",
    surat_izin: "images/surat-izin/default.pdf"

  }
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
    await queryInterface.bulkInsert('Psikologs', psikolog, {});
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