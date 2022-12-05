const {JadwalPsikolog, User} = require('../models');
const jadwalpsikolog = require('../models/jadwalpsikolog');
const Op = require('sequelize').Op;

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

    const {awal,akhir} = req.query

    JadwalPsikolog.findAll({
        where:{
            tanggal: {
                [Op.between]: [awal, akhir]
            }
        },
        include:{
            model: User,
            as: 'psikolog',
            attributes: {exclude: ['password']}
        },
        order: [
            ['tanggal', 'ASC'],
            ['jam', 'ASC']
        ],
    }).then(data => {

        let tanggalKey = ""
        let tanggal = {}

        data.forEach(e => {
            let tanggalValue = e.tanggal.toISOString().split('T')[0]
            if(tanggalKey != tanggalValue){
                tanggalKey = tanggalValue
                tanggal[tanggalKey] = []
            }

            tanggal[tanggalKey].push(e)
        });

        // hitung jumlah data dari masing" tabel tangga
        res.status(201).json({
            message: 'Jadwal found successfully',
            data: tanggal
        })
    })

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