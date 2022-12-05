var express = require('express');
var router = express.Router();

const {welcome} = require('../controllers/welcomeController');
const {getLandingPage} = require('../controllers/landingPagesController');
const middleware = require('../middleware/basic');
const { getAllTeam, getTeamByCode } = require("../controllers/teamController");
const {verifiedWA} = require('../controllers/wangsappController')
const {getAllJadwalPsikolog} = require('../controllers/jadwalPsikologController')
const {notificationMidtrans} = require('../controllers/bookingController')
const {getAllBooking} = require('../controllers/bookingController') 

/* GET users listing. */
router.get('/', middleware , welcome);

router.post('/tes', (req,res) => {
    console.log(req.body.suratIzin)
});

router.get('/jadwal-psikolog', getAllJadwalPsikolog)

router.post('/verified-wa', verifiedWA)

router.get('/home', getLandingPage);
router.get('/teams', getAllTeam);
router.get('/team/:code', getTeamByCode);

router.get('/all-booking', getAllBooking);

router.post('/notif-midtrans', notificationMidtrans)

module.exports = router;

