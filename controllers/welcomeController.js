const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.welcome =  async (req, res) => {
    return res.status(200).json({
        message: 'Welcome to API Feelsbox',
        login: true
    });
}