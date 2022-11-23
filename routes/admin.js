const Router = require('express-group-router');
let router = new Router();

const multer = require('multer');

var upload = multer();

const { welcome } = require("../controllers/welcomeController");
// const { createtesMental, getAlltesMental, edittesMental } = require("../controllers/tesmentalController");
const { createTeam, getAllTeam, getTeamByCode, editTeam, deleteTeam } = require("../controllers/teamController");
const { getAllPsikolog } = require("../controllers/psikologController");
const { editLandingPage } = require('../controllers/landingPagesController');
const { getAllKeluhan } = require('../controllers/keluhanController');
const middlewareAdmin = require('../middleware/admin');

const {homePageAdmin} = require('../controllers/homePageController')

const {registerPsikolog} = require('../controllers/registerController');

const {getAllHasilTes} = require('../controllers/hasilTesController');

const middlewareBasic = require('../middleware/basic');

router.group('/admin', [middlewareBasic, middlewareAdmin], (router) => {
    
    // jadwal
    router.get('/', welcome);

    router.get('/home', homePageAdmin)

    // // tes mental
    // router.get('/tesmental', getAlltesMental);
    // router.post('/tesmental', createtesMental);
    // router.put('/tesmental/:id', edittesMental);

    // hasil tes
    router.get('/hasiltes', getAllHasilTes);

    // teams 
    router.get('/teams', getAllTeam);
    router.get('/team/:code', getTeamByCode);
    router.post('/teams', createTeam);
    router.put('/team/:code', editTeam);
    router.delete('/team/:code', deleteTeam);

    // psikolog
    router.get('/psikolog', getAllPsikolog);
    router.post('/psikolog/register', registerPsikolog);
    // router.get('/psikolog/verifikasi', unverifiedPsikolog);
    // router.put('/psikolog/verifikasi/:code', verifyPsikolog);

    // landing page
    router.put('/landing-page', editLandingPage);

    //keluhan 
    router.get('/keluhan', getAllKeluhan);

});

let routerAdmin = router.init();

module.exports = routerAdmin;