'use strict'
require('dotenv').config();
const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
    const {email, password} =  req.body;

    console.log(req.body);

    const user = await User.findOne({
        where: {
            email
        }
    });
    
    try{

        const result = bcrypt.compareSync(password, user.password);
        
        // jika user tidak ditemukan dan password salah
        if(!user || !result){
            return res.status(401).json({
                message: 'Email or password is wrong'
            });
        }

        const token = jsonwebtoken.sign({
            email: user.email,
            code: user.code,
            role: user.role,
        }, process.env.JWT_KEY, {
            expiresIn: "1d"
        });
        console.log(token);
        return res.status(200).json({
            message: 'Auth successful',
            token: token
        });
    }catch(err){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}

