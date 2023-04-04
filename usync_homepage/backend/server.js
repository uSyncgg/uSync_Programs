const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/usyncApp/tournaments', require('./routes/TourneyRoutes'));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => console.log(`Server start on port ${port}`))
