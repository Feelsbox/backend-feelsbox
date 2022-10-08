'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partnership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partnership.init({
    name_partnership: DataTypes.STRING,
    slug: DataTypes.STRING,
    image_partnership: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'partnership',
  });
  return partnership;
};