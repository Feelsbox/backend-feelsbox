'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class traksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  traksi.init({
    tes_mental_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'tesmental',
        key: 'id'
      }
    },
    user_code: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'code'
      }
    },
    psikolog_code: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'code'
      }
    },
    total_jam_konseling: DataTypes.INTEGER,
    total_kuesioner: DataTypes.INTEGER,
    total_psikolog: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'traksi',
  });

 
  // traksi.associate = function(models) {
  //   traksi.belongsTo(models.tesmental, {
  //     foreignKey: 'tes_mental_id',
  //   });
  //   traksi.belongsTo(models.User, {
  //     foreignKey: 'user_code',
  //     as: 'user'
  //   });
  //   traksi.belongsTo(models.User, {
  //     foreignKey: 'psikolog_code',
  //     as: 'user'
  //   });
  // }
  return traksi;
};