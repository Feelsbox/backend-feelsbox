'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('traksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tes_mental_id: {
        foreignKey: true,
        type: Sequelize.BIGINT
      },
      user_code: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      psikolog_code: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      total_jam_konseling: {
        type: Sequelize.INTEGER
      },
      total_kuesioner: {
        type: Sequelize.INTEGER
      },
      total_psikolog: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('traksis');
  }
};