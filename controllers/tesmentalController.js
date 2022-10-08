'use strict';
require('dotenv').config()
const {TesMental} = require('../models')

exports.tesMental = async (req, res) => {
    const {nomor, soal, opsi_1, opsi_2, opsi_3, opsi_4, point_1, point_2, point_3, point_4, indikator} = req.body

    try {

        const tesMental = await TesMental.create({
            nomor,
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
        })

        res.status(201).json({
            message: 'Tes Mental created successfully',
            tesMental,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }

}