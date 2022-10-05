'use strict'
require('dotenv').config();
const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const {name, email, password, role, jenis_kelamin, tanggal_lahir, domisili, phone} = req.body;

    try {

        const hashPassword = bcrypt.hashSync(password,10)

        const code = Math.random().toString(36).substring(2, 5);

        const user = await User.create({
            code,
            name,
            email,
            password : hashPassword,
            role,
            jenis_kelamin,
            tanggal_lahir,
            domisili,
            phone
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