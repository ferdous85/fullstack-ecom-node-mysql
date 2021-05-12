const homepageCtrl={
    getHomepage : (req, res)=>{
        return res.render('homepage.ejs')
    },
    getNewUserPage : (req, res)=>{
        return res.render('createUser.ejs')
    },
    createNewUser : (req, res)=>{
        console.log(req.body);
    }
}

module.exports = homepageCtrl
    
