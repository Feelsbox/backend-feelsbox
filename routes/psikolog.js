const Router = require('express-group-router');
let router = new Router();


const { welcome } = require("../controllers/welcomeController");

const psikolog = require('../middleware/psikolog')
const basic = require('../middleware/basic');

const {createJadwalPsikolog, getAllJadwalPsikolog ,getByCodeJadwalPsikolog, deleteJadwalPsikolog} = require('../controllers/jadwalPsikologController');

router.group('/psikolog', [basic,psikolog] ,(router) => {
    router.get('/jadwal', getAllJadwalPsikolog);
    router.post('/jadwal/:code', createJadwalPsikolog);
    router.get('/jadwal/:code', getByCodeJadwalPsikolog);
    router.delete('/jadwal/:id', deleteJadwalPsikolog);
});

let routerPsikolog = router.init();

module.exports = routerPsikolog;