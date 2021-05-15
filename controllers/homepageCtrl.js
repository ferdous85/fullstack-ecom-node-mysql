const userService = require('../services/userService')

const homepageCtrl={
    getHomepage : (req, res)=>{
        return res.render('homepage.ejs')
    },
    getNewUserPage : (req, res)=>{
        return res.render('createUser.ejs')
    }
}

module.exports = homepageCtrl
    
