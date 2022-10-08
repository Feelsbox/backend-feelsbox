'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class landing_pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  landing_pages.init({
    slug: DataTypes.STRING,
    visi: DataTypes.STRING,
    misi: DataTypes.STRING,
    about: DataTypes.STRING,
    direct: DataTypes.STRING,
    pencapaian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'landing_pages',
  });
  
  return landing_pages;
};