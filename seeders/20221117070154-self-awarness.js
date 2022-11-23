'use strict';

const soal = [
  {
    "soal" : "Sakit kepala?"
  },
  {
    "soal" : "Kurang nafsu makan?"
  },
  {
    "soal" : "Tidur tidak nyenyak"
  },
  {
    "soal" : "Mudah takut"
  },
  {
    "soal" : "Cemas, tegang, khawatir"
  },
  {
    "soal" : "Tangan gemetar"
  },
  {
    "soal": "Pencernaan terganggu"
  },
  {
    "soal": "Sulit berpikir jernih"
  },
  {
    "soal": "Tidak merasa bahagia"
  },
  {
    "soal": "Lebih sering menangis"
  },
  {
    "soal": "Sulit menikmati kegiatan"
  },
  {
    "soal": "Sulit mengambil keputusan"
  },
  {
    "soal": "Pekerjaan sehari-hari terganggu"
  },
  {
    "soal" : "Tidak mampu berperan aktif dalam kehidupan"
  },
  {
    "soal" : "Kehilangan gairah/minat"
  },
  {
    "soal" : "Merasa tidak berharga"
  },
  {
    "soal" : "Berpikir untuk bunuh diri"
  },
  {
    "soal" : "Selalu merasa lelah"
  },
  {
    "soal" : "Merasa tak nyaman diperut"
  },
  {
    "soal" : "Mudah lelah"
  },
  {
    "soal" : "Minum alkohol/Napza"
  },
  {
    "soal" : "Merasa ada yang akan mencelakai"
  },
  {
    "soal" : "Merasa ada yang menganggu pikiran"
  },
  {
    "soal" : "Mendengar suara yang tidak terdengan oleh orang lain"
  },
  {
    "soal" : "Mimpi musibah atau seakan mengalami kembali"
  },
  {
    "soal" : "Menghindari kegiatan/tempat/orang/pikiran yang mengingatkan musibah"
  },
  {
    "soal" : "Kurang tertarik pada teman/kegiatan sehari-hari"
  },
  {
    "soal" : "Sedih apabila mengingat musibah tersebut"
  },
  {
    "soal" : "Sulit mengeluarkan/menghayati perasaan"
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
      await queryInterface.bulkInsert('TesAwarenesses', soal, {})
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
