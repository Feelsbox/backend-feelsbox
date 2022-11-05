'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TesDiagnosse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TesDiagnosse.init({
    soal: DataTypes.STRING,
    opsi_1: DataTypes.STRING,
    opsi_2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TesDiagnosse',
  });
  return TesDiagnosse;
};