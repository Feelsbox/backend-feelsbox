'use strict';

const soal = [
  {
    "soal" :  "Sedih dan murung hampir setiap waktu",
  },
  {
    "soal" : "Kehilangan minat dan kesenangan hampir seluruh kegiatan"
  },
  {
    "soal" : "Tidak berharga, mudah lelah dan aktivitas menurun"
  },
  {
    "soal" : "Gangguan pola makan"
  },
  {
    "soal" : "Gangguan tidur"
  },
  {
    "soal" : "Gelisah atau lamban"
  },
  {
    "soal" : "Percaya diri dan harga diri menurun"
  },
  {
    "soal" : "Sulit konsentrasi dan mengambil keputusan"
  },
  {
    "soal" : "Merasa bersalah, tidak berguna dan putus asa"
  },
  {
    "soal" : "Berpikir tentang kematian atau bunuh diri"
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
      await queryInterface.bulkInsert('TesDiagnosses', soal, {})
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
