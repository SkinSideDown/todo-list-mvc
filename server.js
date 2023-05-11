//npm install express mongodb mongoose ejs dotenv
//npm install nodemon --save-dev
    //"dev": "nodemon server.js"

//Declare variables
const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config({path: './config/.env'})
const PORT = process.env.PORT
const TodoTask = require('./models/todotask')
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')
const connectDB = require('./config/database')

connectDB()

//Set Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${PORT}`)
}
)