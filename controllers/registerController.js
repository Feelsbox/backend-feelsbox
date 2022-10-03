'use strict'
require('dotenv').config();
const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const {username, password, email, phone, device, deviceId} = req.body;

    try{
        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            username: username,
            password: hash,
            userEmail: email,
            phone: phone,
            device: device,
            deviceid: deviceId
        });

        const token = jsonwebtoken.sign({
            email: user.email,
            userId: user.id
        }, process.env.JWT_KEY, {
            expiresIn: "1d"
        });

        return res.status(201).json({
            message: 'User created',
            token: token
        });
    }catch(err){
        return res.status(500).json({
            message: 'Auth failed'
        });
    }
}