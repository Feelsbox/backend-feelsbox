const Router = require('express-group-router');
let router = new Router();

const {getSoalBdi, penilaianTesBdi} = require('../controllers/tesBdiController');

router.group('/tes-mental', (router) => {

    router.get('/bdi', getSoalBdi);
    router.post('/bdi', penilaianTesBdi);

})

let routerTesMental = router.init();

module.exports = routerTesMental;