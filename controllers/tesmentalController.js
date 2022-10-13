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

        let awareness = [];
        let diagnose = [];
        let bdi = [];

        tesMental.forEach((item) => {
            if(item.indikator == "self-awareness"){
                awareness.push(item);
            }
            else if(item.indikator == "self-diagnose"){
                diagnose.push(item);
            }
            else if(item.indikator == "BDI"){
                bdi.push(item);
            }
        });

        res.status(200).json({
            message: 'Get All Tes Mental successfully',
            data: {
                awareness,
                diagnose,
                bdi
            }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

exports.edittesMental = async (req, res) => {
    const {id} = req.params;

    const { soal, opsi_1, opsi_2, opsi_3,  indikator } = req.body;

    try {
        const tesMental = await TesMental.findOne({
            where: {
                id,
            },
        });

        if (!tesMental) {
            res.status(404).json({
                message: 'Tes Mental not found',
            });
        }

        await tesMental.update({
            soal,
            opsi_1,
            opsi_2,
            opsi_3,
            indikator
        });

        res.status(200).json({
            message: 'Tes Mental updated successfully',
            tesMental,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}