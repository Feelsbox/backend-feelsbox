'use strict';

const bcrypt = require('bcrypt');


const user = [
  {
      code: '1',
      name: 'Admin',
      email: 'admin@feelsbox.id',
      password: bcrypt.hashSync("adminFeelsboxId",10),
      role: 'admin',
      // gender: 'Laki-laki',
      umur: '20',
      domisili: 'Jakarta',
      jenis_pekerjaan: 'Mahasiswa',
      instansi: 'Jakarta',
  },
  {
      code: '2',
      name: 'User',
      email: 'tes@gmail.com',
      password: bcrypt.hashSync("aaa",10),
      phone: "6281818261976",
      role: 'user',
      gender: 'Laki-laki',
      umur: '12 - 16',
      domisili: 'Jakarta',
      jenis_pekerjaan: 'Mahasiswa',
      instansi: 'Jakarta',
  },
  {
    name: "Tamekah Bishop",
    email: "qesyfyq@mailinator.com" ,
    password: bcrypt.hashSync("aaa",10),
    gender: "wanita",
    umur: "lansia awal",
  },
  {
    name: "Aimee Leonard",
    email: "holimufumy@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "lainya",
    umur: "dewasa akhir",
  },
  {
    name: "Jesse Pitts",
    email: "paho@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "pria",
    umur: "remaja awal",
  },
  {
    name: "Abdul Lester",
    email: "wavyw@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "wanita",
    umur: "remaja akhir"
  },
  {
    name: "Catherine Farmer",
    email: "pyvoryh@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "pria",
    umur: "dewasa awal"
  },
  {
    name: "Rigel Henson",
    email: "ligora@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "lainnya",
    umur: "dewasa awal"
  },
  {
    name: "Carla Russo",
    email: "wyzeheg@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "wanita",
    umur: "remaja awal"
  },
  {
    name: "Tara Rojas",
    email: "jemacila@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "wanita",
    umur: "dewasa akhir"
  },
  {
    name: "Oscar Buckner",
    email: "pewozic@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "wanita",
    umur: "lansia akhir"
  },
  {
    name: "Marsden Vang",
    email: "fole@mailinator.com",
    password: bcrypt.hashSync("aaa",10),
    gender: "pria",
    umur: "dewasa awal"
  },
  {
    name: "William Anderson",
    email: "cijil@mailinator.com",
    password: bcrypt.hashSync("psikolog",10),
    gender: "wanita",
    instansi: "Tel-u",
    role: "psikolog"
  },
  {
    name: "Kibo Mccall",
    email: "sejotu@mailinator.com",
    password: bcrypt.hashSync("psikolog",10),
    gender: "pria",
    instansi: "Tel-u",
    role: "psikolog"
  },{
    name: "Zawely Wunoh",
    email: "zawely@mailinator.com",
    password: bcrypt.hashSync("psikolog",10),
    gender: "pria",
    instansi: "Tel-u",
    role: "psikolog"
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
