'use strict';
require('dotenv').config();
const {Keluhan} = require('../models');
const {User} = require('../models');

exports.createKeluhan = async (req, res) => {
    const { keluhan } = req.body;
    const {code} = User.code;

    try {
        const keluhan = await Keluhan.create({
            keluhan
        });

        res.status(201).json({
            message: 'Keluhan created successfully',
            keluhan,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}