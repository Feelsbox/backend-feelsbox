'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TesAwareness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TesAwareness.init({
    soal: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TesAwareness',
  });
  return TesAwareness;
};