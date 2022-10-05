const Router = require('express-group-router');
let router = new Router();


const { welcome } = require("../controllers/welcomeController");
const middlewareAdmin = require('../middleware/admin');

const middlewareBasic = require('../middleware/basic');

router.group('/admin', [middlewareBasic,middlewareAdmin], (router) => {
    router.get('/jadwalPsikolog', welcome);
});

let routerAdmin = router.init();

module.exports = routerAdmin;