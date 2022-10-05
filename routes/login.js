var express = require('express');
var router = express.Router();

const {loginUser} = require('../controllers/loginController');

/* GET users listing. */
router.post('/', loginUser);

module.exports = router;
