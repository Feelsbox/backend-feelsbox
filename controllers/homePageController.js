const {HasilTes} = require('../models')

const {User} = require('../models')

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

exports.homePageAdmin = async (req, res, next) => {

    const users = await User.findAll();

    
    const usia = [0,0,0,0,0,0,]

    const genders = [0,0,0]

    users.forEach((data) => {
       switch(data.umur){
            case 'remaja awal':
                usia[0] += 1
                break;
            case 'remaja akhir':
                usia[1] += 1
                break;
            case 'dewasa awal':
                usia[2] += 1
                break;
            case 'dewasa akhir':
                usia[3] += 1
                break;
            case 'lansia awal':
                usia[4] += 1
                break;
            case 'lansia akhir':
                usia[5] += 1
                break;
       }

       switch(data.gender){
            case 'pria':
                genders[0] += 1
                break;
            case 'wanita':
                genders[1] += 1
                break;
            case 'lainnya':
                genders[2] += 1
                break;
       }
    })
    
    res.status(200).json({
        message: 'Get All Home Page successfully',
        usia,
        genders
    });

};