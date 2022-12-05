const Router = require('express-group-router');
let router = new Router();

const middlewareUser = require('../middleware/user');
const middlewareBasic = require('../middleware/basic');

const {homePageUser} = require('../controllers/homePageController');
const {createKeluhan} = require('../controllers/keluhanController');
const {getAllJadwalPsikolog} = require('../controllers/jadwalPsikologController')
const {makeBookingKonsultasi, getAllTransaksion} = require('../controllers/bookingController')

router.group('/user', [middlewareBasic, middlewareUser], (router) => {
    
    // jadwal
    router.get('/home', homePageUser);

    //keluhans
    router.post('/keluhan', createKeluhan)

    router.get('/jadwal-psikolog', getAllJadwalPsikolog)

    router.post('/booking', makeBookingKonsultasi)

    router.get('/transaksi', getAllTransaksion)

});

let routerAdmin = router.init();

module.exports = routerAdmin;
