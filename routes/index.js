const express = require('express');

const trabajadoresRoute = require('./trabajadores.routes')
const economicosRoute = require('./economicos.routes')
const generalRoute = require('./general.routes')

function routerApi(app) {  
    const router = express.Router();
    app.use('/api', router);
    router.use('/trabajadores', trabajadoresRoute);
    router.use('/economicos', economicosRoute);
    router.use('/general', generalRoute);
}
module.exports = routerApi;