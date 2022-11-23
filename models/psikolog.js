'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Psikolog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Psikolog.init({
    user_id: DataTypes.INTEGER,
    surat_izin: DataTypes.STRING,
    nomor: DataTypes.STRING,
    spesialisasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Psikolog',
  });

  Psikolog.associate = function(models) {
    Psikolog.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };

  return Psikolog;
};