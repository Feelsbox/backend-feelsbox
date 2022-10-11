'use strict';
require('dotenv').config()
const {TesMental} = require('../models')

exports.createtesMental = async (req, res) => {
    const {nomor_soal, soal, opsi_1, opsi_2, opsi_3, opsi_4, point_1, point_2, point_3, point_4, indikator} = req.body

    try {

        const tesMental = await TesMental.create({
            nomor_soal,
            soal,
            opsi_1,
            opsi_2,
            opsi_3,
            opsi_4,
            point_1,
            point_2,
            point_3,
            point_4,
            indikator
        });

        res.status(201).json({
            message: 'Tes Mental created successfully',
            tesMental,
        });

    } catch (err) {
        console.log(err),  
        res.status(500).json({
            message: err.message,
        });
    }

}

exports.getAlltesMental = async (req, res) => {
    try {
        const tesMental = await TesMental.findAll();
        var soals = [];
        tesMental.forEach(() => {
            soals.push({
                "self-awareness": TesMental.findAll({where : {indikator: 'self-awareness'}}),
                "self-diagnose": TesMental.findAll({where : {indikator: 'self-diagnose'}}),
                "BDI": TesMental.findAll({where : {indikator: 'BDI'}})
            });
        });

        res.status(200).json({
            message: 'Get All Tes Mental successfully',
            soals,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}