'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bdi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bdi.init({
    soal: DataTypes.STRING,
    nomor_1: DataTypes.STRING,
    nomor_2: DataTypes.STRING,
    nomor_3: DataTypes.STRING,
    nomor_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bdi',
  });
  return Bdi;
};