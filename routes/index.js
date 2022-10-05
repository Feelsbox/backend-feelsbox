var express = require('express');
var router = express.Router();

const {welcome} = require('../controllers/welcomeController');
const middleware = require('../middleware/basic');

/* GET users listing. */
router.get('/', middleware , welcome);

module.exports = router;

