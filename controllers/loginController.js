'use strict'
require('dotenv').config();
const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
    const {email, password} =  req.body;

    const user = await User.findOne({
        where: {
            useremail: email
        }
    });
    
    try{
        const result = await bcrypt.compare(password, user.password);

        if(!user && !result) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }

        const token = jsonwebtoken.sign({
            email: user.email,
            userId: user.id
        }, process.env.JWT_KEY, {
            expiresIn: "1d"
        });

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
