const Router = require('express-group-router');
let router = new Router();

const {getSoalBdi, penilaianTesBdi} = require('../controllers/tesBdiController');
const {getSoalSelfAwarness, penilaianTesSelfAwarness} = require('../controllers/tesSelfAwarnessController');
const {getSoalDiagnosse, penilaianTesSelfDiagnose} = require('../controllers/tesSelfDiagnoseController');

const middlewareUser = require('../middleware/user');
const middlewareBasic = require('../middleware/basic');

router.group('/tes-mental', (router) => {

    router.get('/bdi', getSoalBdi);
    router.post('/bdi', [middlewareBasic, middlewareUser], penilaianTesBdi);

    router.get('/self-awarness', getSoalSelfAwarness )
    router.post('/self-awarness', penilaianTesSelfAwarness)

    router.get('/self-diagnose', getSoalDiagnosse)
    router.post('/self-diagnose', penilaianTesSelfDiagnose)
})

let routerTesMental = router.init();

module.exports = routerTesMental;