'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  review.init({
    konsultasi_id: DataTypes.BIGINT.UNSIGNED,
    user_code: DataTypes.STRING,
    review: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });

  review.associate = function(models) {
    review.belongsTo(models.konsultasi, {
      foreignKey: 'konsultasi_id',
    });
    review.belongsTo(models.User, {
      foreignKey: 'user_code',
    });
  }
  return review;
};