var express = require('express');
var router = express.Router();

const {welcome} = require('../controllers/welcomeController');
const {getLandingPage} = require('../controllers/landingPagesController');
const middleware = require('../middleware/basic');
const { getAllTeam, getTeamByCode } = require("../controllers/teamController");

/* GET users listing. */
router.get('/', middleware , welcome);

router.post('/tes', (req,res) => {
    console.log(req.body.suratIzin)
});


router.get('/home', getLandingPage);
router.get('/teams', getAllTeam);
router.get('/team/:code', getTeamByCode);

module.exports = router;

