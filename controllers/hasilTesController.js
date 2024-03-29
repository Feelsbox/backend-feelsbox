'use strict';
require('dotenv').config();
const {HasilTes} = require('../models');
const {User} = require('../models')
const Op = require('sequelize').Op;

exports.createHasilTes = async (req, res) => {
    let date = Date.now()
}

exports.getAllHasilTes = async (req, res) => {
    try {
    //    find all user include hasil tes except role admin and psikolog
        const hasilTes = await User.findAll({
            where: {
                role: {
                    [Op.not]: ['admin', 'psikolog']
                }
            },
            
            include: {
                model: HasilTes,
                // order created at
                order: [
                    ['createdAt', 'DESC']
                ]
            }
        });
       

        res.status(200).json({
            message: 'Get All Hasil Tes successfully',
            data: hasilTes,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.getHasilTesById = async (req, res) => {

    const id = req.user.id

    try {

        const hasilTes = await HasilTes.findOne({
            where: {
                user_id: id
            }
        });

        res.status(200).json({
            message: 'Get Hasil Tes successfully',
            data: hasilTes,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}