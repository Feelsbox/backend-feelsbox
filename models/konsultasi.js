'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class konsultasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  konsultasi.init({
    id_pemesanan: DataTypes.STRING,
    client_code: DataTypes.STRING,
    psikolog_code: DataTypes.STRING,
    waktu: DataTypes.TIME,
    tanggal: DataTypes.DATEONLY,
    calendar_id: DataTypes.STRING,
    link: DataTypes.STRING,
    status: DataTypes.STRING,
    bukti_pembayaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'konsultasi',
  });

  konsultasi.associate = function(models) {
    konsultasi.belongsTo(models.User, {
      foreignKey: 'client_code',
      foreignKey: 'psikolog_code',
    });

    konsultasi.hasMany(models.review);
  }
  return konsultasi;
};