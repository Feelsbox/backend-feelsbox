'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HasilTes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_code: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      nilai: {
        type: Sequelize.INTEGER
      },
      kesimpulan: {
        type: Sequelize.STRING
      },
      waktu: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('HasilTes');
  }
};