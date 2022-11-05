'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TesBdi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TesBdi.init({
    soal: DataTypes.STRING,
    opsi_1: DataTypes.STRING,
    opsi_2: DataTypes.STRING,
    opsi_3: DataTypes.STRING,
    opsi_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TesBdi',
  });
  return TesBdi;
};