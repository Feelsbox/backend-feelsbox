const Router = require('express-group-router');
let router = new Router();


const { welcome } = require("../controllers/welcomeController");
const { tesMental } = require("../controllers/tesmentalController");
const middlewareAdmin = require('../middleware/admin');

const middlewareBasic = require('../middleware/basic');

router.group('/admin', [middlewareBasic,middlewareAdmin], (router) => {
    
    // jadwal
    router.get('/', welcome);

    // tes mental
    router.post('/tesmental', tesMental);


});

let routerAdmin = router.init();

module.exports = routerAdmin;