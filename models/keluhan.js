'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keluhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  keluhan.init({
    user_code: DataTypes.STRING,
    keluhan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keluhan',
  });

  keluhan.associate = function(models) {
    keluhan.belongsTo(models.User, {
      foreignKey: 'user_code',
    });
  }
  return keluhan;
};