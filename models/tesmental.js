'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TesMental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TesMental.init({
    nomor_soal: DataTypes.STRING,
    soal: DataTypes.STRING,
    opsi_1: DataTypes.STRING,
    opsi_2: DataTypes.STRING,
    opsi_3: DataTypes.STRING,
    opsi_4: DataTypes.STRING,
    point_1:DataTypes.INTEGER,
    point_2:DataTypes.INTEGER,
    point_3:DataTypes.INTEGER,
    point_4:DataTypes.INTEGER,
    indikator: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TesMental',
  });

  TesMental.associate = function(models) {
    TesMental.hasMany(models.traksi, {
      foreignKey: 'tes_mental_id',
    });
  };
  return TesMental;
};