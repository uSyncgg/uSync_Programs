const mongoose = require('mongoose');

const TourneySchema = mongoose.Schema({
    tournament: {
        _id: mongoose.Schema.Types.ObjectId,

        date: String,

        time: String,

        title: String,

        entry: String,

        size: String,

        platforms: [String],

        game: String
    }
})

module.exports = mongoose.model('tournament', TourneySchema)