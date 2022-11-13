'use strict';

const team = [
  {
    code: 'THI',
    name: 'Muhammad Fathi Rabbani ',
    image: "",
    jabatan: "Chief Executive Officer",
    role: "c-level",
    deskripsi: `Hi, there are below my activities in Feelsbox:
      <ul>
      <li>Memulai kemitraan strategis untuk mendorong kesadaran merek termasuk acara khusus wilayah dan aktivasi nasional</li>
      <li>Membangun database besar klien masa lalu dan saat ini dan melakukan analisis pasar untuk mencari pelanggan potensial</li>
      <li>Bertanggung jawab untuk menjaga hubungan yang kuat dengan 30 mitra dan bertanggung jawab untuk menjaga hubungan yang kuat dengan 30 mitra dan klien</li>
      <li>Membangun strategi bisnis dan menemukan klien untuk diajak bekerja sama membangun strategi bisnis dan menemukan klien untuk diajak bekerja sama</li>
      <ul>`,
    instagram: "https://instagram.com/mhmdfathh",
    linkedin: "https://www.linkedin.com/in/muhammad-fathi-rabbani-b289b3220/",
    gmail: "mfathirabbani20@gmail.com"
  },{
    code: "DKA",
    name: "Mahardika Maulana Al Mahdi Handoko",
    image: "",
    jabatan: "Chief Operating Officer",
    role: "c-level",
    deskripsi: `Hai, nama saya Dika, disini saya dipercaya sebagai COO yang bertugas mengelola seluruh kebutuhan internal feelsbox, mulai dari Koordinasi dengan mitra hingga memenuhi kebutuhan yang diperlukan oleh anggota Feelsquad lainnya.`,
    instagram: "https://instagram.com/mahardika1416",
    linkedin: "https://www.linkedin.com/in/mahardikamaulana",
    gmail: "mahardikahandoko@gmail.com"
  },{
    code: "WKS",
    name: "Wahyudi Khoeris Salimi",
    image: "",
    jabatan: "Chief Technology Officer",
    role: "c-level",
    deskripsi: "Perkenalkan saya wahyudi khoeris salimi dapat juga dipanggil wahyu. Posisi saya di feelsbox adalah sebagai Chief Officer Technology. Tugas saya adalah memimpin proses deployment serta merancang sistem arsitektur website dan aplikasi mobile feelsbox. Saya disini juga ikut serta dalam pengkodean secara teknikal",
    instagram: "https://www.instagram.com/capricron._/",
    linkedin: "https://www.linkedin.com/in/wahyudi-khoeris-salimi-15942b198/",
    gmail: "eriscapricron@gmail.com"
  },
  {
    code: "IPR",
    name: "Irsa Pramesti Rahmadani",
    image: "",
    jabatan: "Chief Finance Officer",
    role: "c-level",
    deskripsi: "Hai #FeelsSquad! Saya Irsa, Chief Financial Officer di Feelsbox. Saya bertanggung jawab untuk mengelola tindakan keuangan Feelsbox seperti melacak arus kas, penganggaran, dan menganalisis semua aktivitas keuangan.",
    instagram: "https://www.instagram.com/irsaprmst/",
    linkedin: "https://www.linkedin.com/in/irsa-pramesti-rahmadani-802024208/",
    gmail: "irsaprmst@gmail.com"
  },
  {
    code: "MNT",
    name: "Muhammad Nafitianto",
    image: "",
    jabatan: "Chief Human Resource Officer",
    role: "c-level",
    deskripsi: "Halo saya Muhammad Nafitianto dan biasa disapa Nafi. Motto yang saya miliki grow to share and share to grow. Saya di Feelsbox bertanggungjawab terkait Human Resource, Development internal dan rekruitmen.",
    instagram: "https://www.instagram.com/muhammad_nafitianto/",
    linkedin: "https://www.linkedin.com/in/muhammad-nafitianto-33b06b232",
    gmail: ""
  },
  {
    code: "SYF",
    name: "Syfani Alya Fauziyah",
    image: "",
    jabatan: "CEO Office",
    image: "",
    role: "c-level",
    deskripsi: "",
    instagram: "",
    linkedin: "",
    gmail: ""
  },
  {
    code: "MAD",
    name: "Muhammad Aji Darmawan",
    image: "",
    jabatan: "Human Resource",
    role: "HR",
    deskripsi: "Perkenalkan nama saya Muhammad Aji Darmawan saya sebagai staff HR di Feelsbox",
    instagram: "https://instagram.com/ajiidarmawan_",
    linkedin: "https://www.linkedin.com/in/aji-darmawan-b39a02148",
    gmail: "ajiidarmawan2501@gmail.com"
  },
  {
    code: "BDT",
    name: "Bq. Dinda Tarbiyatuzzahrah",
    image: "",
    jabatan: "Human Resource",
    role: "HR",
    deskripsi: "Hallo everyone! kenalin aku Dinda, mahasiswi Sistem Informasi, Telkom University. Posisi aku di Feelsbox yaitu sebagai HR staff. Aku di sini mengurus bagian administrasi, khususnya dalam melakukan penilaian dan presensi Feelsbox team.",
    instagram: "https://instagram.com/dindatarbiya",
    linkedin : "http://www.linkedin.com/in/dindatarbiya",
    gmail: "dindatarbiya@gmail.com"
  },
  {
    code: "SJB",
    name: "Shah Jehan Basrul",
    image: "",
    jabatan: "Head of Event",
    role: "Marketing",
    deskripsi: "Halo, kenalin gue jeje mahasiswi sistem informasi telkom university, di feelsbox gue sebagai head of event, dimana kegiatan gue merancang inisiasi, dan mengeksekusi acara branding feelsbox yang mencakup FeelsGworth (Workshop/training), FeelsShari ng(Webinar), FeelsCaring(Campaign), dan FeelsAlive(Live Ig).",
    instagram: "https://instagram.com/jejehann06",
    linkedin: '',
    gmail: "shahjehanb060104@gmail.com"
  },
  {
    code: "MZR",
    name: "Muhammad Zaidan Rafii",
    image: "",
    jabatan: "Content Lead",
    role: "Marketing",
    deskripsi: "Hai semuanya, saya anggota feelbox, bagian dari divisi konten, posisi sebagai pemimpin konten. Saya di Feelbox bertugas membuat dan mengunggah konten tentang FeelBox. selain itu saya juga bertugas mensupervisi anggota tim saya yang juga mempunyai tugas membuat dan mengupload konten seputar feelbox. di feelbox kami juga bekerjasama dengan divisi lain untuk mengadakan kegiatan di sekitar feelbox",
    instagram: "https://www.instagram.com/mzrafii",
    linkedin: "http://feelsbox.xxuz.com/team/muhammad-zaidan-rafii",
    gmail: "mzrafi1708@gmail.com"
  },
  {
    code: "FRJ",
    name: "Firdausi Rizkilah Januarizad",
    image: "",
    jabatan: "Event Management",
    role: "Marketing",
    deskripsi: "Halo, aku Firdausi. Hobinya tidur namun kalo udah kerja pasti kelar. Saat ini saya berada di Event Management Feelsbox",
    instagram: "http://instagram.com/firdausi.rj",
    linkedin: "https://www.linkedin.com/in/firdausi-rizkilah-januarizad-b637b0223",
    gmail: "firdausirizkilah74@gmail.com"
  },
  {
    code: "SKA",
    name: "Soya Karerra",
    image: "",
    jabatan: "Content Writer",
    role: "Marketing",
    deskripsi:  "Halo semuanya, saya anggota feelbox, bagian dari divisi konten, posisi sebagai penulis konten, saya di feelbox yang bertugas membuat dan mengunggah konten tentang feelbox. Selain itu saya juga bertugas untuk membuat konten kreatif dan di dalam feelbox kami juga bekerja sama dengan divisi lain untuk mengadakan kegiatan di feelsbox.",
    instagram: "https://www.instagram.com/soyakarerra",
    linkedin: "https://www.linkedin.com/in/soyakarerra/",
    gmail: "soyakarerra@gmail.com"
  },
  {
    code: "TMC",
    name: "Tasya Maeza Chiqamara",
    image: "",
    jabatan: "Content Design",
    role: "Marketing",
    deskripsi: "Haloo ges, kenalin gue Tasya dari S1 Sistem Informasi Telkom University sebagai anggota dari Divisi Konten! Kegiatan gue dibagian divisi konten ini yaitu mendesain postingan konten & mempublikasi konten di media sosial",
    instagram: "https://instagram.com/tasymae",
    linkedin: "",
    gmail: "tasyamaezc@gmail.com"
  },
  {
    code: "AMA",
    name: "Adib Muhyi Asa",
    image: "",
    jabatan: "Vice Content Lead",
    role: "Marketing",
    deskripsi: "Kenalin namaku Adib. Mahasiswa S1 Psikologi Universitas Semarang. Dalam feelsbox memiliki tugas sebagai content creator sekaligus membatu dalam pengelolaan konten. Ikut andil dalam penyeragaman desain konten, dan membuat trobosan materi konten yang unik.",
    instagram: "https://instagram.com/tidursalto",
    linkedin: "",
    gmail: "muhyiadib@gmail.com"
  },
  {
    code: "SHA",
    name: "Sultan Hafizh Alexander",
    image: "",
    jabatan: "FrontEnd",
    role: "Technology",
    deskripsi: "Hai #feelsSquad! Saya Sultan, Senior Frontend Developer di Feelsbox. Saya bertanggung jawab dalam membuat user interface dan mengimplementasikan design ke dalam webapp maupun aplikasi. Let's build our mental shield!",
    instagram: "https://www.instagram.com/",
    linkedin: "",
    gmail: ""
  },
  {
    code: "RYG",
    name: "Rafly Yogaswara",
    image: "",
    jabatan: "Backend",
    role: "Technology",
    deskripsi: "Halo guys, kenalin gue Yogas sebagai Senior Back-End pada IT Development Feelsbox dimana gue akan mengurus dalam hal database pada Feelsbox ini. Terima Kasih 🙏",
    instagram: "https://www.instagram.com/raflyyogas/",
    linkedin: "https://www.linkedin.com/in/raflyyogas/",
    gmail: "raflyyogaswara48@gmail.com"
  },
  {
    code: "MMM",
    name: "Muhammad Mufid Musyaffa",
    image: "",
    deskripsi: "",
    jabatan: "Backend",
    role: "Technology",
    deskripsi: "",
    instagram: "",
    linkedin: "",
    gmail: ""
  },
  {
    code: "MAH",
    name: "M Ahyar Harizillah",
    image: "",
    jabatan: "UI/UX",
    role: "Technology",
    deskripsi: "",
    instagram: "",
    linkedin: "",
    gmail: ""
  },
  {
    code: "IMA",
    name: "Ihsanulisra Maulana",
    image: "",
    jabatan: "UI/UX",
    role: "Technology",
    deskripsi: "",
    instagram: "",
    linkedin: "",
    gmail: ""
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
     await queryInterface.bulkInsert('Teams', team, {}) 
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
