const models = require('../models');
const { Op } = require("sequelize");

exports.selesaiKonsultasi = async () => {
    const user = await models.user.findAll();

    console.log(user);
}