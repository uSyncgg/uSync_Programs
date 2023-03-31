// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// // app.use(cors());
// // app.use(express.json());

// mongoose.connect('mongodb+srv://oconn:Pokemon123@test.fadkhjf.mongodb.net/tournaments', {
//     useNewURLParser: true,
//     useUnifiedTopology: true,
// });

// const mySchema = new mongoose.Schema({
//     date: String,
//     time: String,
//     title: String,
//     entry: String,
//     size: String,
//     platforms: Array,
//     gamemode: String,
// });

// const TourneyData = mongoose.model('TourneyData', mySchema, 'tournaments');

// module.exports = TourneyData;

// router.get('/data', async(req, res) => {
//     const data = await tournaments.find({});
//     res.json(data);
// });

// // app.listen(5000, () => {
// //     console.log('Server started on port 5000');
// // });

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
// const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use('/usyncApp/tournaments', require('./routes/TourneyRoutes'));

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// app.use('/api/goals', require('./routes/goalRoutes'))
// app.use('/api/users', require('./routes/userRoutes'))

// app.use(errorHandler)

app.listen(port, () => console.log(`Server start on port ${port}`))
