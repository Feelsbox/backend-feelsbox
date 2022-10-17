const Router = require('express-group-router');
let router = new Router();


const { welcome } = require("../controllers/welcomeController");
const { createtesMental, getAlltesMental, edittesMental } = require("../controllers/tesmentalController");
const { createTeam, getAllTeam, getTeamByCode, editTeam, deleteTeam } = require("../controllers/teamController");
const { getVerifiedPsikolog, unverifiedPsikolog, verifyPsikolog } = require("../controllers/psikologController");
const { editLandingPage } = require('../controllers/landingPagesController');
const middlewareAdmin = require('../middleware/admin');

const middlewareBasic = require('../middleware/basic');

router.group('/admin', [middlewareBasic, middlewareAdmin], (router) => {
    
    // jadwal
    router.get('/', welcome);

    // tes mental
    router.get('/tesmental', getAlltesMental);
    router.post('/tesmental', createtesMental);
    router.put('/tesmental/:id', edittesMental);

    // teams 
    router.get('/teams', getAllTeam);
    router.get('/team/:code', getTeamByCode);
    router.post('/teams', createTeam);
    router.put('/team/:code', editTeam);
    router.delete('/team/:code', deleteTeam);

    // psikolog
    router.get('/psikolog', getVerifiedPsikolog);
    router.get('/psikolog/verifikasi', unverifiedPsikolog);
    router.put('/psikolog/verifikasi/:code', verifyPsikolog);

    // landing page
    router.put('/landing-page', editLandingPage);

});

let routerAdmin = router.init();

module.exports = routerAdmin;