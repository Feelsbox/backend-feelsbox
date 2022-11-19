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
            style: persentase,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi. Kamu berada dalam kondisi atau suasana perasaan yang baik-baik saja. Saat ini, kamu dapat mengendalikan perasaan, emosi, serta pikiran dengan baik. Semoga harimu berjalan dengan baik!"
        });
    }else if(nilai <= 16){
    
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan : "Perasaan Murung",
            emote : "😀",
            style: persentase,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi. Kamu dalam kondisi atau suasana perasaan yang murung. Kamu mengalami sedikit kelelahan terhadap aktivitas atau kegiatan sehari-hari, namun perasaan yang sedang dirasakan saat ini masih bisa kendalikan dan tidak mengganggu aktivitas sehari-hari. Kamu butuh istirahat sejenak atau melakukan kegiatan yang dapat merefresh kembali perasaan anda, semisal: berolahraga, mendengarkan musik, dan lainnya. Jika perasaan saat ini mulai berlarut-larut dan sudah mulai tidak dapat mengendalikan perasaan, emosional, perilaku, dan pikiran, boleh dicoba untuk menghubungi professional, yaitu psikolog atau psikiater. Untuk psikolog juga bisa hubungi atau daftar sesi konseling di Feelsbox ya. Yuk bisa yuk, kamu keren!"
        });
    }else if(nilai <= 20){
        emote = "🙂"
        keterangan = "Tanda - tanda Mulai Depresi"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi. Kamu berada dalam kondisi atau suasana emosional di batas depresi. Kadangkala, kamu mengalami kelelahan secara psikis terhadap aktivitas atau kegiatan sehari-hari. Tak hanya itu, suasana perasaan dan emosional kamu mulai mengganggu aktivitas sehari-hari. Kamu perlu mewaspadai kondisi saat ini. Dengan menyadari perasaan apa yang sedang dirasakan dan hal apa yang mengganggu pikiran. Disarankan jika kondisi anda saat ini tak kunjung membaik, boleh dicoba untuk menghubungi profesional, yaitu psikolog atau psikiater. Untuk psikolog juga bisa hubungi atau daftar sesi konseling di Feelsbox ya. Kamu hebat kok, sudah bertahan hingga hari ini!"
        });
    }else if(nilai <= 30){
        emote = "😐"
        keterangan = "Depresi Ringan"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi, kamu dalam kondisi atau suasana emosional mengalami depresi ringan. Kamu mulai mengalami kelelahan secara psikis terhadap aktivitas atau kegiatan sehari-hari. Suasana perasaan dan emosional mulai mengganggu keseharian kamu. Kamu sudah perlu mewaspadai kondisi saat ini. Dengan menyadari perasaan apa yang sedang kamu rasakan dan hal apa yang mengganggu pikiran. Disarankan jika kondisi anda saat ini tak kunjung membaik, anda perlu menghubungi profesional, yaitu psikolog atau psikiater. Untuk Psikolog juga bisa hubungi atau daftar sesi konseling di Feelsbox ya. Semangat untuk hari ini dan hari yang akan datang!"
        });
    }else if(nilai <= 40){
        emote = "😕"
        keterangan = "Depresi Sedang"
        return res.status(200).json({
            message: 'Nilai BDI',
            nilai: nilai,
            keterangan,
            emote,
            style: persentase,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi. Kamu berada dalam kondisi atau suasana emosional mengalami depresi sedang. Kamu mengalami kelelahan secara psikis terhadap aktivitas atau kegiatan sehari-hari. Suasana perasaan dan emosional mengganggu kegiatan atau aktivitas sehari-hari. Kamu perlu mewaspadai kondisi kamu saat ini. Dengan menyadari perasaan apa yang sedang dirasakan dan hal apa yang mengganggu pikiran. Disarankan untuk menghubungi profesional, yaitu psikolog atau psikiater. Untuk psikolog juga bisa hubungi atau daftar sesi konseling di Feelsbox ya. Semoga kamu senantiasa diberikan kemudahan dan kelancaran dalam aktivitas."
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
            style: 99,
            deskripsi: "Berdasarkan hasil dari Beck Depression Inventory (BDI) atau tes depresi. Kamu berada dalam kondisi atau suasana emosional mengalami depresi sedang. Kamu mengalami kelelahan secara psikis terhadap aktivitas atau kegiatan sehari-hari. Suasana perasaan dan emosional mengganggu kegiatan atau aktivitas sehari-hari. Kamu perlu mewaspadai kondisi kamu saat ini. Dengan menyadari perasaan apa yang sedang dirasakan dan hal apa yang mengganggu pikiran. Disarankan untuk menghubungi profesional, yaitu psikolog atau psikiater. Untuk psikolog juga bisa hubungi atau daftar sesi konseling di Feelsbox ya. Semoga kamu senantiasa diberikan kemudahan dan kelancaran dalam aktivitas."
        });
    }
}