const {TesBdi} = require('../models')

exports.getSoalBdi = async (req, res) => {
    try {
        const soalBdi = await TesBdi.findAll();
        res.status(200).json({
            message: 'Get All Soal Bdi successfully',
            data: soalBdi,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.penilaianTesBdi = async (req, res) => {

    const jawabans = req.body

    console.log(jawabans)
    const soalBdi = await TesBdi.findAll();
    let nilai = 0;

    soalBdi.forEach((item, index) => {
        nilai += parseInt(jawabans[index].jawaban)
        console.log(nilai)
    });

    // persentase dari variabel nilai dengan max 88
    const persentase = (nilai / 40) * 100;

    let keterangan;
    let emote;

    console.log(persentase)

    if(nilai <= 10){
        
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan : 'Suasana Perasaan Normal',
            emote : "😎",
            style: persentase
        });
    }else if(nilai <= 16){
    
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan : "Perasaan Murung",
            emote : "😀",
            style: persentase
        });
    }else if(nilai <= 20){
        emote = "🙂"
        keterangan = "Tanda - tanda Mulai Depresi"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase
        });
    }else if(nilai <= 30){
        emote = "😐"
        keterangan = "Depresi Ringan"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase
        });
    }else if(nilai <= 40){
        emote = "😕"
        keterangan = "Depresi Sedang"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase
        });
    }else if(nilai > 40){
        console.log("masuk")
        emote = "😟"
        keterangan = "Depresi Berat"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: 99
        });
    }
}