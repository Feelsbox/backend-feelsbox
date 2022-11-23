'use strict';

const bdi = [
  {
    soal: "Apakah kamu mengalami sedih yang berkepenjangan?",
    opsi_1: "Saya tidak merasa sedih",
    opsi_2: "Saya merasa sedih",
    opsi_3: "Saya sedih sepanjang waktu dan tidak dapat menghilangkannya",
    opsi_4: "Saya begitu sedih sehingga merasa tidak tahan lagi"
  },
  {
    soal: "Apa kamu merasa berkecil hati terhadap masa depan?",
    opsi_1: "Saya tidak merasa berkecil hati",
    opsi_2: "Saya merasa berkecil hati",
    opsi_3: "Saya merasa tidak ada sesuatu yang saya nantikan",
    opsi_4: "Saya merasa tidak ada harapan dan segala sesuatu tak dapat diperbaiki"
  },
  {
    soal: "Apakah kamu merasa gagal?",
    opsi_1: "Saya tidak merasa gagal",
    opsi_2: "Saya merasa lebih banyak mengalami kegagalan dari rata-rata orang lain",
    opsi_3: "Kalau meninjau kembali kehidupan saya, yang dapat dilihat hanyalah kegagalan",
    opsi_4: "Saya merasa gagal total"
  },
  {
    soal: "Apakah kamu mendapatkan suatu kepuasan/kenikmatan dari apa yang kamu lakukan?",
    opsi_1: "Saya mendapatkan kepuasan sebanyak yang biasa saya lakukan",
    opsi_2: "Saya tidak menikmati hal-hal seperti dulu",
    opsi_3: "Saya tidak mendapatkan kepuasan nyata dari apapun lagi",
    opsi_4: "Saya tidak puas/bosan dengan semuanya"
  },
  {
    soal: "Apa kamu merasa sangat bersalah akan sesuatu?",
    opsi_1: "Saya tidak merasa sangat bersalah",
    opsi_2: "Saya terkadang merasa bersalah",
    opsi_3: "Saya sering merasa bersalah",
    opsi_4: "Saya selalu merasa bersalah sepanjang waktu"
  },
  {
    soal: "Apa kamu merasa kondisi yang kamu alami saat ini merupakan hukuman untuk kamu?",
    opsi_1: "Saya tidak merasa sedang dihukum",
    opsi_2: "Saya merasa bahwa saya sedang dihukum",
    opsi_3: "Saya mengharapkan agar saya dihukum",
    opsi_4: "Saya merasa bahwa saya sedang dihukum"
  },
  {
    soal: "Apakah kamu pernah menyalahkan diri sendiri?",
    opsi_1: "Saya tidak merasa lebih buruk dari orang lain",
    opsi_2: "Saya selalu mencela diri sendiri karena kelemahan/kekeliruan saya",
    opsi_3: "Saya menyalahkan diri sendiri sepanjang waktu atas kesalahan sendiri sepanjang waktu",
    opsi_4: "Saya menyalahkan diri sendiri sepanjang waktu atas semua hal buruk yang terjadi"
  },
  {
    soal: "Apakah kamu pernah menyalahkan orang lain?",
    opsi_1: "Saya tidak pernah menyalahkan orang lain",
    opsi_2: "Saya pernah menyalahkan orang lain karena kelemahan/kekeliruan saya",
    opsi_3: "Saya pernah menyalahkan orang lain sepanjang waktu atas kesalahan saya",
    opsi_4: "Saya pernah menyalahkan orang lain sepanjang waktu atas kesalahan saya",
  },
  {
    soal: "Apa kamu merasa kecewa dengan diri sendiri?",
    opsi_1: "Saya tidak kecewa",
    opsi_2: "Saya kecewa",
    opsi_3: "Saya merasa jijik terhadap diri sendiri",
    opsi_4: "Saya membenci diri sendiri"
  },
  {
    soal: "Apa kamu pernah berpikiran untuk bunuh diri?",
    opsi_1: "Saya tidak mempunyai pikiran seperti itu",
    opsi_2: "Saya pernah berpikiran, tapi tidak akan melakukannya",
    opsi_3: "Saya ingin bunuh diri",
    opsi_4: "Saya akan bunuh diri jika ada kesempatan"
  },
  {
    soal: "Apa kamu sering menangis?",
    opsi_1: "Saya tidak menangis lebih dari biasanya",
    opsi_2: "Saya lebih banyak menangis dari biasanya",
    opsi_3: "Saya menangis sepanjang waktu",
    opsi_4: "Saya biasanya dapat menangis, tetapi sekarang sudah tidak dapat menangis walaupun ingin menangis"
  },
  {
    soal: "Apa kamu mudah marah?",
    opsi_1: "Saya tidak merasa lebih mudah marah dari sebelumnya",
    opsi_2: "Saya lebih mudah marah dari biasanya",
    opsi_3: "Saya sekarang merasa marah sepanjang waktu",
    opsi_4: "Saya tidak marah oleh hal-hal yang biasanya menjengkelkan"
  },
  {
    soal: "Apakah kamu senang bergaul?",
    opsi_1: "Saya masih senang bergaul dengan orang lain",
    opsi_2: "Saya kurang berminat pada orang lain dibandingkan biasanya",
    opsi_3: "Saya kehilangan sebagian besar minat pada orang lain",
    opsi_4: "Saya kehilangan seluruh minat pada orang lain"
  },
  {
    soal: "Apakah kamu dapat mengambil keputusan dengan baik?",
    opsi_1: "Saya mengambil keputusan dengan sama baiknya seperti sebelumnya",
    opsi_2: "Saya lebih banyak menunda keputusan dari biasanya",
    opsi_3: "Saya mempunyai kesulitan yang lebih besar dari sebelumnya",
    opsi_4: "Saya sama sekali tidak dapat mengambil keputusan"
  },
  {
    soal: "Apakah kamu merasa ada yang berubah dari penampilanmu?",
    opsi_1: "Saya cemas, jangan-jangan saya sudah tidak tua dan tidak menarik",
    opsi_2: "Saya cemas, jangan-jangan saya sudah tidak tua dan tidak menarik",
    opsi_3: "Saya merasa ada perubahan dalam penampilan sehingga tidak menarik",
    opsi_4: "Saya yakin terlihat buruk"
  },{
    soal : "Apakah kamu dapat bekerja dengan baik?",
    opsi_1: "Saya dapat bekerja dengan baik seperti sebelumnya",
    opsi_2: "Saya membutuhkan usaha keras untuk memulai mengerjakan sesuatu",
    opsi_3: "Saya harus memaksakan diri untuk mengerjakan sesuatu",
    opsi_4: "Saya sama sekali tidak dapat mengerjakan apa-apa"
  },
  {
    soal: "Apa kamu dapat tidur dengan nyenyak?",
    opsi_1: "Saya dapat tidur dengan baik seperti biasanya",
    opsi_2: "Saya tidak dapat tidur nyenyak seperti biasanya",
    opsi_3: "Saya bangun lebih awal dari biasanya dan sulit untuk tidur kembali",
    opsi_4: "Saya bangun beberapa jam lebih awal dari biasanya dan tidak bisa tidur kembali"
  },
  {
    soal: "Apa kamu mudah lelah?",
    opsi_1: "Saya tidak lebih lelah dari biasanya",
    opsi_2: "Saya lebih mudah lelah dari biasanya",
    opsi_3: "Saya hampir selalu merasa lelah dalam mengerjakan sesuatu",
    opsi_4: "Saya merasa terlalu lelah untuk mengerjakan apa saja"
  },
  {
    soal: "Apakah nafsu makanmu berkurang?",
    opsi_1: "Masih seperti biasanya",
    opsi_2: "Tidak sebesar biasanya",
    opsi_3: "Nafsu makan jauh lebih berkurang",
    opsi_4: "Tidak mempunyai nafsu makan sama sekali"
  },
  {
    soal: "Apakah berat badanmu menurun?",
    opsi_1: "Saya tidak banyak kehilangan berat badan",
    opsi_2: "Kehilangan berat badan >2.5 kg",
    opsi_3: "Kehilangan berat badan >5 kg",
    opsi_4: "Kehilangan berat badan >7.5 kg"
  },
  {
    soal: "Apa kamu mencemaskan kesehatan fisikmu?",
    opsi_1: "Saya tidak cemas",
    opsi_2: "Saya mencemaskan kesehatan fisik saya; rasa nyeri seperti sakit perut/sembelit",
    opsi_3: "Saya sangat cemas sehingga sulit memikirkan hal lainnya",
    opsi_4: "Saya begitu cemas sehingga tak dapat berpikir hal lain"
  },
  {
    soal: "Apakah gairah seksualmu menurun?",
    opsi_1: "Saya merasa tidak ada perubahan",
    opsi_2: "Saya kurang berminat dibandingkan biasanya",
    opsi_3: "Sekarang, saya sangat kurang berminat",
    opsi_4: "Saya sama sekali kehilangan minat"
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
    await queryInterface.bulkInsert('TesBdis', bdi, {}) 
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
