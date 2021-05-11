const express = require('express')
const homepageCtrl = require('../controllers/homepageCtrl')


let router = express.Router()

let initAllWebRouters = (app) =>{
    router.get('/', homepageCtrl.getHomepage)

    return app.use('/', router)
}

module.exports = initAllWebRouters