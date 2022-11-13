const {Bdi} = require('../models')

exports.getSoalBdi = async (req, res) => {
    try {
        const soalBdi = await Bdi.findAll();

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

    const {jawabans} = req.body

    const soalBdi = await Bdi.findAll();

    let nilai = 0;

    soalBdi.forEach((item, index) => {
        if (item.jawaban == jawaban[index]) {
            nilai += 1;
        }
    });

    res.status(200).json({
        message: 'Get All Soal Bdi successfully',
        data: nilai,
    });

}