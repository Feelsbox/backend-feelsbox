'use strict'
require('dotenv').config();
const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const {
        // section 1
        name, 
        email, 
        password,  
        phone,
        
        // section 2
        gender,
        umur,
        domisili, 

        // section 3
        jenis_pekerjaan,
        tempat_pendidikan,
        
    } = req.body;

    try {

        const hashPassword = bcrypt.hashSync(password,10)

        const code = Math.random().toString(36).substring(2, 5);

        const user = await User.create({
            // section 1
            name, 
            email, 
            password : hashPassword,  
            phone,

            // section 2
            gender,
            umur,
            domisili, 

            // section 3
            jenis_pekerjaan,
            tempat_pendidikan,
        });

        res.status(201).json({
            message: 'User created successfully',
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}