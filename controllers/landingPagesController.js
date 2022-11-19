'use strict';
require('dotenv').config();
const {LandingPage} = require('../models');

exports.getLandingPage = async (req, res) => {
    try {
        const landingPage = await LandingPage.findAll();

        res.status(200).json({
            message: 'Get Landing Page successfully',
            data: landingPage,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.editLandingPage = async (req, res) => {
    const {visi, misi, about, direct} = req.body;

    try {
        const landingPage = await LandingPage.update({
            visi,
            misi,
            about,
            direct
        });

        res.status(201).json({
            message: 'Landing Page updated successfully',
            data: landingPage,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}