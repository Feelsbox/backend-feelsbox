'use strict';
require('dotenv').config();
const {Teams} = require('../models');

exports.createTeam = async (req, res) => {
    const {code, name, image, jabatan, deskripsi, instagram, linkedin, gmail} = req.body;

    try {
            
            const team = await Teams.create({
                code,
                name,
                image,
                jabatan,
                deskripsi,
                instagram,
                linkedin,
                gmail
            });
    
            res.status(201).json({
                message: 'Team created successfully',
                team,
            });
    
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }

}

exports.getAllTeam = async (req, res) => {
    try {
        const team = await Teams.findAll();

        let anggota = [];

        team.forEach((item) => {
            anggota.push(item.code)
            anggota.push(item.nama)
            anggota.push(item.jabatan)
        });

        res.status(200).json({
            message: 'Get All Team successfully',
            data: team,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.getTeamByCode = async (req, res) => {
    try {
        const {code} = req.params;
        const team = await Teams.findOne({
            where: {
                code
            }
        });
        res.status(200).json({
            message: 'Get Team by code successfully',
            team,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.editTeam = async (req, res) => {
    const {code} = req.params
    const {name, image, jabatan, deskripsi, instagram, linkedin, gmail} = req.body;

    try {
        const team = await Teams.findOne({where: {code: code}});
        if (!team) {
            res.status(404).json({
                message: 'Team not found'
            });
        }
        
        await team.update({
            name,
            image,
            jabatan,
            deskripsi,
            instagram,
            linkedin,
            gmail
        });
        
        res.status(200).json({
            message: 'Team updated successfully',
            team,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.deleteTeam = async (req, res) => {
    const {code} = req.params;

    try {
        const team = await Teams.findOne({where: {code: code}});
        if (!team) {
            res.status(404).json({
                message: 'Team not found'
            });
        }
        await team.destroy();
        res.status(200).json({
            message: 'Team deleted successfully',
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}