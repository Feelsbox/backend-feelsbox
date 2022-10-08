'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('konsultasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pemesanan: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      client_code: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      psikolog_code: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      waktu: {
        type: Sequelize.TIME
      },
      tanggal: {
        type: Sequelize.DATEONLY
      },
      calendar_id: {
        allowNull: true,
        defaultvalue: null,
        type: Sequelize.STRING
      },
      link: {
        allowNull: true,
        defaultvalue: null,
        type: Sequelize.STRING
      },
      status: {
        allowNull: true,
        defaultvalue: null,
        type: Sequelize.STRING
      },
      bukti_pembayaran: {
        allowNull: true,
        defaultvalue: null,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('konsultasis');
  }
};