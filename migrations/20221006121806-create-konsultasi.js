'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Konsultasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      client_id: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      psikolog_id: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      jam: {
        type: Sequelize.TIME
      },
      tanggal: {
        type: Sequelize.DATEONLY
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
      message:{
        defaultValue: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Konsultasis');
  }
};