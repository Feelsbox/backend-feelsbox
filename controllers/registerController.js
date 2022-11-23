require('dotenv').config();

// model
const {User} = require('../models');
const {Psikolog} = require('../models')

const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {client} = require('../wa');
const wa = client;

exports.registerUser = async (req, res) => {
    const {
        // section 1
        name, 
        email, 
        password,  
        phone,
        
        // section 2
        jenis_kelamin,
        umur,
        domisili, 

        // section 3
        jenis_pekerjaan,
        instansi,
        
    } = req.body;

    console.log(req.body)

    try {
        const hashPassword = bcrypt.hashSync(password,10)

        // cek apakah ada email yang sama
        const cekEmail = await User.findOne({
            where: {
                email
            }
        });

        if(cekEmail){
            return res.status(409).json({
                message: 'Email already exists'
            });
        }


        const code = Math.random().toString(36).substring(2, 5);

        const user = await User.create({
            // section 1
            name, 
            email, 
            password: hashPassword,
            phone,
            role: "user",
            jenis_kelamin,
            umur,
            domisili, 
            jenis_pekerjaan,
            instansi,
        });

        const token = jsonwebtoken.sign({
            email: user.email,
            id: user.id,
            role: user.role,
            name: user.name,
        }, process.env.JWT_KEY, {
            expiresIn: "1d"
        });

        // wa.sendMessage(`${phone}@c.us`, `Hai ${name}\nSelamat datang di feelsbox sebuah layanan konseling yang akan membantu menjaga kesehatan mental kamu`)

        res.status(201).json({
            message: 'User created successfully',
            user,
            token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

exports.registerPsikolog  = async (req, res) => {
    // relasikan data user dan psikolog

    const suratIzin = req.files[0].path;

    const { name, email, instansi, spesialisasi, gender, nomor } = req.body;

    const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync("psikologfeelsbox",10),
        role: "psikolog",
        gender,
        instansi,
    })


    const psikolog = await Psikolog.create({
        surat_izin: suratIzin,
        nomor,
        spesialisasi,
        user_id: user.id
    })


    res.status(201).json({
        message: 'Psikolog created successfully',
        psikolog,
    });

    

}