'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Konsultasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Konsultasi.init({
    order_id: DataTypes.STRING,
    client_id: DataTypes.STRING,
    psikolog_id: DataTypes.STRING,
    jam: DataTypes.TIME,
    tanggal: DataTypes.DATEONLY,
    link: DataTypes.STRING,
    status: DataTypes.STRING,
    message: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Konsultasi',
  });

  Konsultasi.associate = function(models) {
    // relasi ke tabel User sebagai client
    Konsultasi.belongsTo(models.User, {
      foreignKey: 'client_id',
      as: 'client'
    });

    // relasi ke tabel User sebagai psikolog
    Konsultasi.belongsTo(models.User, {
      foreignKey: 'psikolog_id',
      as: 'psikolog'
    });

    Konsultasi.hasMany(models.review);
  }
  return Konsultasi;
};