const {JadwalPsikolog} = require('../models');
const jadwalpsikolog = require('../models/jadwalpsikolog');

exports.createJadwalPsikolog = async (req, res) => {
    const {code} = req.params;
    const {tanggal, jam} = req.body;

    if(req.user.code != code){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

    JadwalPsikolog.create({
        user_code: code,
        tanggal,
        jam
    }).then(jadwal => {
        res.status(201).json({
            message: 'Jadwal created successfully',
            data: jadwal,
        });
    }).catch(error => {
        res.status(500).json({
            message: error.message,
        });
    });
}

exports.getAllJadwalPsikolog = async (req, res) => {

    JadwalPsikolog.findAll().then(jadwal => {
        res.status(200).json({
            message: 'Get All Jadwal successfully',
            data: jadwal,
        });
    }).catch(error => {
        res.status(500).json({
            message: error.message,
        });
    });
}

exports.getByCodeJadwalPsikolog = async (req, res) => {
    const {code} = req.params;

    JadwalPsikolog.findAll({
        where: {
            user_code: code
        }
    }).then(jadwal => {
        res.status(200).json({
            message: 'Jadwal found successfully',
            data: jadwal,
        });
    }).catch(error => {
        res.status(500).json({
            message: error.message,
        });
    });
}

exports.deleteJadwalPsikolog = async (req, res) => {
    const {id} = req.params;

    JadwalPsikolog.destroy({
        where: {
            id: id
        }
    }).then(jadwal => {
        res.status(200).json({
            message: 'Jadwal deleted successfully',
            data: jadwal,
        });
    }).catch(error => {
        res.status(500).json({
            message: error.message,
        });
    });
}