const express = require('express')
const homepageCtrl = require('../controllers/homepageCtrl')


let router = express.Router()

let initAllWebRouters = (app) =>{
    router.get('/', homepageCtrl.getHomepage)
    router.get('/new-user', homepageCtrl.getNewUserPage)
    router.post('/create-new-user', homepageCtrl.createNewUser )

    return app.use('/', router)
}

module.exports = initAllWebRouters