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
    user_id: DataTypes.INTEGER,
    bdi: DataTypes.INTEGER,
    awareness: DataTypes.STRING,
    diagnose: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HasilTes',
  });
  
  HasilTes.associate = function(models) {
    HasilTes.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };

  return HasilTes;
  
};