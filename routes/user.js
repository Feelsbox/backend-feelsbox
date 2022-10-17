const Router = require('express-group-router');
let router = new Router();

const { welcome } = require("../controllers/welcomeController");
const { createKeluhan } = require('../controllers/keluhanController');


const { basic } = require('../middleware/basic')

router.group('/user', [basic], (router) => {

    // keluhan
    router.post('/keluhan', createKeluhan);

});

let routerUser = router.init();

module.exports = routerUser;