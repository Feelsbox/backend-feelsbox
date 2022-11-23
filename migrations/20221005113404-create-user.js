'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      umur: {
        type: Sequelize.STRING
      },
      domisili: {
        type: Sequelize.STRING
      },
      jenis_pekerjaan:{
        type: Sequelize.STRING
      },
      instansi:{
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'images/profile/default.png'
      },
      phone: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};