const express = require('express')
const ejs = require('ejs')

//config view engine for node

let configViewEngine = (app) =>{

    app.use(express.static("./public"))
    app.set('view engine', ejs)
    app.set('views', './views')

}

module.exports = configViewEngine