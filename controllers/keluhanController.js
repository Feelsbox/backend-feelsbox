'use strict';
require('dotenv').config();
const {Keluhan} = require('../models');
const {auth} = require('../middleware/basic')

exports.createKeluhan = async (req, res) => {
    const { keluhan } = req.body;
    // get user code from authorization
    const user_code = req.user.code;

    try {
        const keluhans = await Keluhan.create({
            user_code,
            keluhan
        });

        res.status(201).json({
            message: 'Keluhan created successfully',
            keluhans,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}