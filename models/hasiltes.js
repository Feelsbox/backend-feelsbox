'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HasilTes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HasilTes.init({
    user_code: DataTypes.INTEGER,
    nilai: DataTypes.INTEGER,
    kesimpulan: DataTypes.STRING,
    waktu: DataTypes.DATE    
  }, {
    sequelize,
    modelName: 'HasilTes',
  });
  
  HasilTes.associate = function(models) {
    HasilTes.belongsTo(models.User, {
      foreignKey: 'user_code',
      as: 'user'
    });
  };

  return HasilTes;
  
};