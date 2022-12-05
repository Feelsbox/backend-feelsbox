'use strict'
const {TesAwareness} = require('../models');
const {HasilTes} = require('../models')


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

    // update hasil tes self awareness 



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

    var keterangan = '';
    var emote = '';
    var deskripsi = '';
    var style = '';

    if(nilaisesi1 >= 5 && nilaisesi2 >=1){
        keterangan = 'Anda Harus Ke Psikolog',
        style = '75',
        emote = "😟",
        deskripsi= "Jangan takut untuk menghubungi psikolog untuk berkonsultasi terkait kesehatan mentalmu. \n Kesehatan mental sama pentingnya dengan kesehatan fisik."
    }else{
        keterangan = 'Anda Tidak Perlu Ke Psikolog',
        style = '25',
        emote = "😎",
        deskripsi = "Kamu baik baik saja, tetap jaga kesehatan fisik maupun mentalnya ya! "
    }

    const tesSebelumnya = await HasilTes.findOne({
        where: {
            user_id: req.user.id
        }
    })

    if(tesSebelumnya){
        const tesUpdate = await HasilTes.update({
            awareness: keterangan,
        },{
            where: {
                user_id: req.user.id
            }
        })
        
    }else{
        const tesBaru = await HasilTes.create({
            user_id: req.user.id,
            awareness: keterangan,
        })
    }
        


    return res.status(200).json({
        message: 'Status Self Awarness',
        keterangan,
        style,
        emote,
        deskripsi
    })

}