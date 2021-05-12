require('dotenv').config()
const express = require('express')

//const connectDB = require('./config/connectDB')

const configViewEngine = require('./config/viewEngine')
const initAllWebRouters = require('./routes/web')

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//confiq view engine

configViewEngine(app)

//connectDB()

//init all web routes
initAllWebRouters(app)

let port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})


