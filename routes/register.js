var express = require('express');
var router = express.Router();

const {registerUser} = require('../controllers/registerController');

/* GET users listing. */
router.post('/', registerUser);

module.exports = router;
