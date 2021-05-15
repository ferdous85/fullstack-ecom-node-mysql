const express = require('express')
const expressEjsExtend = require('express-ejs-extend')

//config view engine for node

let configViewEngine = (app)=> {
    app.use(express.static("./public"));
    app.engine("ejs", expressEjsExtend);
    app.set("view engine", "ejs");
    app.set("views","./views");
};


module.exports = configViewEngine