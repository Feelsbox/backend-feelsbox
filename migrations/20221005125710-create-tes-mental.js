'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tesMentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor_soal: {
        type: Sequelize.STRING
      },
      soal: {
        type: Sequelize.STRING
      },
      opsi_1: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      opsi_2: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      opsi_3: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      opsi_4: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      point_1: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      point_2: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      point_3: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      point_4: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      indikator: {
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
    },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tesMentals');
  }
};