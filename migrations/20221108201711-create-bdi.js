'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bdis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soal: {
        type: Sequelize.STRING
      },
      nomor_1: {
        type: Sequelize.STRING
      },
      nomor_2: {
        type: Sequelize.STRING
      },
      nomor_3: {
        type: Sequelize.STRING
      },
      nomor_4: {
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
    await queryInterface.dropTable('Bdis');
  }
};