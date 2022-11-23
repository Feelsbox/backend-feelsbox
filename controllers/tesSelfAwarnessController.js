'use strict'
const {TesAwareness} = require('../models');

exports.getSoalSelfAwarness = async (req, res) => {
    try {
        const soalSelfAwarness = await TesAwareness.findAll();
        console.log(soalSelfAwarness)
        res.status(200).json({
            message: 'Get All Soal Self Awarness successfully',
            data: soalSelfAwarness,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.penilaianTesSelfAwarness = async (req, res) => {

    let sesi1 = req.body.sesi1;
    let sesi2 = req.body.sesi2;

    let nilaisesi1 = 0;
    for (let i = 0; i < sesi1.length; i++) {
        nilaisesi1 += parseInt(sesi1[i].jawaban)
    }

    let nilaisesi2 = 0;
    for (let i = 0; i < sesi2.length; i++) {
        nilaisesi2 += parseInt(sesi2[i].jawaban)
    }

    if(nilaisesi1 >= 5 && nilaisesi2 >=1){
        return res.status(200).json({
            message: 'Status Self Awarness',
            keterangan: 'Anda Harus Ke Psikolog',
            style: '75',
            emote: "😟",
            deskripsi: "Jangan takut untuk menghubungi psikolog untuk berkonsultasi terkait kesehatan mentalmu. \n Kesehatan mental sama pentingnya dengan kesehatan fisik."
        })
    }else{
        return res.status(200).json({
            message: 'Status Self Awarness',
            keterangan: 'Anda Tidak Perlu Ke Psikolog',
            style: '25',
            emote: "😎",
            deskripsi: "Kamu baik baik saja, tetap jaga kesehatan fisik maupun mentalnya ya! "
        })
    }

}