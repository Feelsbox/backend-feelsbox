'use strict';
require('dotenv').config();
const {User} = require('../models');

exports.getVerifiedPsikolog = async (req, res) => {
    try {
        const psikolog = await User.findAll({
            where: {
                role: 'psikolog',
                verified: true
            }
        });

        res.status(200).json({
            message: 'Get All Psikolog successfully',
            data: psikolog,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.unverifiedPsikolog = async (req, res) => {
    try {
        const psikolog = await User.findAll({
            where: {
                role: 'psikolog',
                verified: false 
            }
        });

        res.status(200).json({
            message: 'Get All Psikolog successfully',
            data: psikolog,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.verifyPsikolog = async (req, res) => {
    try {
        const {code} = req.params;
        
        const psikolog = await User.findOne({
            where: {
                role: 'psikolog',
                code: code
            }
        });
        
        await psikolog.update({
            verified: true
        })

        res.status(200).json({
            message: 'Psikolog verified successfully',
            data: psikolog,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}