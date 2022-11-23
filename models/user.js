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
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.STRING,
    umur: DataTypes.STRING,
    domisili: DataTypes.STRING,
    jenis_pekerjaan: DataTypes.STRING,
    instansi: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
    User.hasOne(models.Psikolog, {
      foreignKey: 'user_id',
    });
    User.hasMany(models.HasilTes, {
      foreignKey: 'user_id',
    })
  };

  return User;
};