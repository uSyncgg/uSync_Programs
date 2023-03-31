const mongoose = require('mongoose');

const TourneySchema = mongoose.Schema({
    tournament: {
        _id: Object,

        date: String,

        time: String,

        title: String,

        entry: String,

        size: String,

        platforms: Array,

        gamemode: String
    }
})

module.exports = mongoose.model('tournament', TourneySchema)