const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Tourney = require('../models/TourneyModel');

const tournament = asyncHandler (async (req, res) => {
    const tourney = await Tourney.findById(0);

    if (tourney) {
        res.json({
            _id: tourney.id,
            date: tourney.date,
            time: tourney.time,
            title: tourney.title,
            entry: tourney.entry,
            size: tourney.size,
            platforms: tourney.platforms,
            gamemode: tourney.gamemode
        })        
    }
})

module.exports = tournament;