'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    code: DataTypes.NUMBER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    umur: DataTypes.STRING,
    domisili: DataTypes.STRING,
    jenis_pekerjaan: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
    User.hasMany(models.JadwalPsikolog, {
      foreignKey: 'user_code',
    });
    User.hasMany(models.traksi, {
      foreignKey: 'user_code',
    });
    User.hasMany(models.traksi, {
      foreignKey: 'psikolog_code',
    });
  };
  return User;
};