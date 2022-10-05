'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JadwalPsikologs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_code: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.DATE
      },
      jam: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('JadwalPsikologs');
  }
};