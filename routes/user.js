const Router = require('express-group-router');
let router = new Router();

const middlewareUser = require('../middleware/user');
const middlewareBasic = require('../middleware/basic');

const {homePageUser} = require('../controllers/homePageController');

router.group('/user', [middlewareBasic, middlewareUser], (router) => {
    
    // jadwal
    router.get('/home', homePageUser);

});

let routerAdmin = router.init();

module.exports = routerAdmin;