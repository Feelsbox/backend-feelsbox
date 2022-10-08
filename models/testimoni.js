'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testimoni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  testimoni.init({
    user_code: DataTypes.STRING,
    testimoni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testimoni',
  });

  testimoni.associate = function(models) {
    testimoni.belongsTo(models.User, {
      foreignKey: 'user_code',
    });
  }
  
  return testimoni;
};