'use strict';

const psikolog = [
  {
    user_id: 3,
    nomor: "01-52C-5735",
    spesialisasi: "sebaya",
    surat_izin: "images/surat-izin/default.pdf"
  },{
    user_id: 4,
    nomor: "01-52C-5735",
    spesialisasi: "konselor",
    surat_izin: "images/surat-izin/default.pdf"
  },
  {
    user_id: 5,
    nomor: "01-52C-5735",
    spesialisasi: "sebaya",
    surat_izin: "images/surat-izin/default.pdf",
  },
  {
    user_id: 6,
    nomor: "01-52C-5735",
    spesialisasi: "konselor",
    surat_izin: "images/surat-izin/default.pdf",
  },
  {
    user_id: 7,
    nomor: "01-52C-5735",
    spesialisasi: "konselor",
    surat_izin: "images/surat-izin/default.pdf",
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
