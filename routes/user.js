const Router = require('express-group-router');
let router = new Router();

const middlewareUser = require('../middleware/user');
const middlewareBasic = require('../middleware/basic');

const {homePageUser} = require('../controllers/homePageController');
const {createKeluhan} = require('../controllers/keluhanController');

router.group('/user', [middlewareBasic, middlewareUser], (router) => {
    
    // jadwal
    router.get('/home', homePageUser);

    //keluhans
    router.post('/keluhan', createKeluhan)

});

let routerAdmin = router.init();

module.exports = routerAdmin;
