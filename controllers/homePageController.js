const {HasilTes} = require('../models')

exports.homePageUser = async (req, res, next) => {

    const {id} = req.user
    console.log(id)
    const hasilTes = await HasilTes.findAll({
        where: {
            user_id : id
        }
    })

    // looping hasil tes
    hasilTes.forEach((item) => {
        console.log(item)
    })

    res.status(200).json({
        message: 'Get All Home Page successfully',
        hasilTes
    });

};