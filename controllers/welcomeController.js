const {User} = require('../models');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.welcome =  async (req, res) => {
    const id = req.user.userId;
    const user = await User.findOne({
        where: {
            id: id
        }
    });
    // kirim response
    return res.status(200).json({
        message: 'Welcome',
        user: user
    });
}