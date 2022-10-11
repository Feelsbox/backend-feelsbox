const Router = require('express-group-router');
let router = new Router();


const { welcome } = require("../controllers/welcomeController");
const { createtesMental, getAlltesMental } = require("../controllers/tesmentalController");
const middlewareAdmin = require('../middleware/admin');

const middlewareBasic = require('../middleware/basic');

router.group('/admin', [middlewareBasic,middlewareAdmin], (router) => {
    
    // jadwal
    router.get('/', welcome);

    // tes mental
    router.get('/tesmental', getAlltesMental);
    router.post('/tesmental', createtesMental);


});

let routerAdmin = router.init();

module.exports = routerAdmin;