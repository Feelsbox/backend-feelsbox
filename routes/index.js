var express = require('express');
var router = express.Router();

const {welcome} = require('../controllers/welcomeController');
const {getLandingPage} = require('../controllers/landingPagesController');
const middleware = require('../middleware/basic');

/* GET users listing. */
router.get('/', middleware , welcome);
router.get('/home', getLandingPage);

module.exports = router;

