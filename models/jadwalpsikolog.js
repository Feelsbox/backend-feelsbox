'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalPsikolog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JadwalPsikolog.init({
    user_code: DataTypes.STRING,
    tanggal: DataTypes.DATEONLY,
    jam: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'JadwalPsikolog',
  });

  JadwalPsikolog.associate = function(models) {
    JadwalPsikolog.belongsTo(models.User, {
      foreignKey: 'user_code',
    });
  };

  return JadwalPsikolog;
};