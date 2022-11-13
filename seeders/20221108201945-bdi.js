'use strict';

const bdi = [
  {
    soal: "Apakah kamu mengalami sedih yang berkepenjangan?",
    nomor_1: "Saya tidak merasa sedih",
    nomor_2: "Saya merasa sedih",
    nomor_3: "Saya sedih sepanjang waktu dan tidak dapat menghilangkannya",
    nomor_4: "Saya begitu sedih sehingga merasa tidak tahan lagi"
  },
  {
    soal: "Apa kamu merasa berkecil hati terhadap masa depan?",
    nomor_1: "Saya tidak merasa berkecil hati",
    nomor_2: "Saya merasa berkecil hati",
    nomor_3: "Saya merasa tidak ada sesuatu yang saya nantikan",
    nomor_4: "Saya merasa tidak ada harapan dan segala sesuatu tak dapat diperbaiki"
  },
  {
    soal: "Apakah kamu merasa gagal?",
    nomor_1: "Saya tidak merasa gagal",
    nomor_2: "Saya merasa lebih banyak mengalami kegagalan dari rata-rata orang lain",
    nomor_3: "Kalau meninjau kembali kehidupan saya, yang dapat dilihat hanyalah kegagalan",
    nomor_4: "Saya merasa gagal total"
  },
  {
    soal: "Apakah kamu mendapatkan suatu kepuasan/kenikmatan dari apa yang kamu lakukan?",
    nomor_1: "Saya mendapatkan kepuasan sebanyak yang biasa saya lakukan",
    nomor_2: "Saya tidak menikmati hal-hal seperti dulu",
    nomor_3: "Saya tidak mendapatkan kepuasan nyata dari apapun lagi",
    nomor_4: "Saya tidak puas/bosan dengan semuanya"
  },
  {
    soal: "Apa kamu merasa sangat bersalah akan sesuatu?",
    nomor_1: "Saya tidak merasa sangat bersalah",
    nomor_2: "Saya terkadang merasa bersalah",
    nomor_3: "Saya sering merasa bersalah",
    nomor_4: "Saya selalu merasa bersalah sepanjang waktu"
  },
  {
    soal: "Apa kamu merasa kondisi yang kamu alami saat ini merupakan hukuman untuk kamu?",
    nomor_1: "Saya tidak merasa sedang dihukum",
    nomor_2: "Saya merasa bahwa saya sedang dihukum",
    nomor_3: "Saya mengharapkan agar saya dihukum",
    nomor_4: "Saya merasa bahwa saya sedang dihukum"
  },
  {
    soal: "Apakah kamu pernah menyalahkan diri sendiri?",
    nomor_1: "Saya tidak merasa lebih buruk dari orang lain",
    nomor_2: "Saya selalu mencela diri sendiri karena kelemahan/kekeliruan saya",
    nomor_3: "Saya menyalahkan diri sendiri sepanjang waktu atas kesalahan sendiri sepanjang waktu",
    nomor_4: "Saya menyalahkan diri sendiri sepanjang waktu atas semua hal buruk yang terjadi"
  },
  {
    soal: "Apakah kamu pernah menyalahkan orang lain?",
    nomor_1: "Saya tidak pernah menyalahkan orang lain",
    nomor_2: "Saya pernah menyalahkan orang lain karena kelemahan/kekeliruan saya",
    nomor_3: "Saya pernah menyalahkan orang lain sepanjang waktu atas kesalahan saya",
    nomor_4: "Saya pernah menyalahkan orang lain sepanjang waktu atas kesalahan saya",
  },
  {
    soal: "Apa kamu merasa kecewa dengan diri sendiri?",
    nomor_1: "Saya tidak kecewa",
    nomor_2: "Saya kecewa",
    nomor_3: "Saya merasa jijik terhadap diri sendiri",
    nomor_4: "Saya membenci diri sendiri"
  },
  {
    soal: "Apa kamu pernah berpikiran untuk bunuh diri?",
    nomor_1: "Saya tidak mempunyai pikiran seperti itu",
    nomor_2: "Saya pernah berpikiran, tapi tidak akan melakukannya",
    nomor_3: "Saya ingin bunuh diri",
    nomor_4: "Saya akan bunuh diri jika ada kesempatan"
  },
  {
    soal: "Apa kamu sering menangis?",
    nomor_1: "Saya tidak menangis lebih dari biasanya",
    nomor_2: "Saya lebih banyak menangis dari biasanya",
    nomor_3: "Saya menangis sepanjang waktu",
    nomor_4: "Saya biasanya dapat menangis, tetapi sekarang sudah tidak dapat menangis walaupun ingin menangis"
  },
  {
    soal: "Apa kamu mudah marah?",
    nomor_1: "Saya tidak merasa lebih mudah marah dari sebelumnya",
    nomor_2: "Saya lebih mudah marah dari biasanya",
    nomor_3: "Saya sekarang merasa marah sepanjang waktu",
    nomor_4: "Saya tidak marah oleh hal-hal yang biasanya menjengkelkan"
  },
  {
    soal: "Apakah kamu senang bergaul?",
    nomor_1: "Saya masih senang bergaul dengan orang lain",
    nomor_2: "Saya kurang berminat pada orang lain dibandingkan biasanya",
    nomor_3: "Saya kehilangan sebagian besar minat pada orang lain",
    nomor_4: "Saya kehilangan seluruh minat pada orang lain"
  },
  {
    soal: "Apakah kamu dapat mengambil keputusan dengan baik?",
    nomor_1: "Saya mengambil keputusan dengan sama baiknya seperti sebelumnya",
    nomor_2: "Saya lebih banyak menunda keputusan dari biasanya",
    nomor_3: "Saya mempunyai kesulitan yang lebih besar dari sebelumnya",
    nomor_4: "Saya sama sekali tidak dapat mengambil keputusan"
  },
  {
    soal: "Apakah kamu merasa ada yang berubah dari penampilanmu?",
    nomor_1: "Saya cemas, jangan-jangan saya sudah tidak tua dan tidak menarik",
    nomor_2: "Saya cemas, jangan-jangan saya sudah tidak tua dan tidak menarik",
    nomor_3: "Saya merasa ada perubahan dalam penampilan sehingga tidak menarik",
    nomor_4: "Saya yakin terlihat buruk"
  },{
    soal : "Apakah kamu dapat bekerja dengan baik?",
    nomor_1: "Saya dapat bekerja dengan baik seperti sebelumnya",
    nomor_2: "Saya membutuhkan usaha keras untuk memulai mengerjakan sesuatu",
    nomor_3: "Saya harus memaksakan diri untuk mengerjakan sesuatu",
    nomor_4: "Saya sama sekali tidak dapat mengerjakan apa-apa"
  },
  {
    soal: "Apa kamu dapat tidur dengan nyenyak?",
    nomor_1: "Saya dapat tidur dengan baik seperti biasanya",
    nomor_2: "Saya tidak dapat tidur nyenyak seperti biasanya",
    nomor_3: "Saya bangun lebih awal dari biasanya dan sulit untuk tidur kembali",
    nomor_4: "Saya bangun beberapa jam lebih awal dari biasanya dan tidak bisa tidur kembali"
  },
  {
    soal: "Apa kamu mudah lelah?",
    nomor_1: "Saya tidak lebih lelah dari biasanya",
    nomor_2: "Saya lebih mudah lelah dari biasanya",
    nomor_3: "Saya hampir selalu merasa lelah dalam mengerjakan sesuatu",
    nomor_4: "Saya merasa terlalu lelah untuk mengerjakan apa saja"
  },
  {
    soal: "Apakah nafsu makanmu berkurang?",
    nomor_1: "Masih seperti biasanya",
    nomor_2: "Tidak sebesar biasanya",
    nomor_3: "Nafsu makan jauh lebih berkurang",
    nomor_4: "Tidak mempunyai nafsu makan sama sekali"
  },
  {
    soal: "Apakah berat badanmu menurun?",
    nomor_1: "Saya tidak banyak kehilangan berat badan",
    nomor_2: "Kehilangan berat badan >2.5 kg",
    nomor_3: "Kehilangan berat badan >5 kg",
    nomor_4: "Kehilangan berat badan >7.5 kg"
  },
  {
    soal: "Apa kamu mencemaskan kesehatan fisikmu?",
    nomor_1: "Saya tidak cemas",
    nomor_2: "Saya mencemaskan kesehatan fisik saya; rasa nyeri seperti sakit perut/sembelit",
    nomor_3: "Saya sangat cemas sehingga sulit memikirkan hal lainnya",
    nomor_4: "Saya begitu cemas sehingga tak dapat berpikir hal lain"
  },
  {
    soal: "Apakah gairah seksualmu menurun?",
    nomor_1: "Saya merasa tidak ada perubahan",
    nomor_2: "Saya kurang berminat dibandingkan biasanya",
    nomor_3: "Sekarang, saya sangat kurang berminat",
    nomor_4: "Saya sama sekali kehilangan minat"
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
    await queryInterface.bulkInsert('Bdis', bdi, {}) 
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
