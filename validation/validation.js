const {check, validationResult} = require('express-validator');

exports.validation =  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.validationLogin = [
    check('email', 'Username tidak boleh kosong').notEmpty(),
    check('password', 'Password tidak boleh kosong').notEmpty(),
];
