const mongoose = require('mongoose');

const TourneySchema = mongoose.Schema({
    date: String,
    time: String,
    title: String,
    entry: String,
    size: String,
    platforms: Array,
    gamemode: String,
})

module.exports = mongoose.model('Tournaments', TourneySchema)