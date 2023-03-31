// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');
// const Tourney = require('../models/TourneyModel');

// const tournament = asyncHandler (async (req, res) => {
//     const tourney = await Tourney.findById(0);

//     if (tourney) {
//         res.json({
//             _id: tourney.id,
//             date: tourney.date,
//             time: tourney.time,
//             title: tourney.title,
//             entry: tourney.entry,
//             size: tourney.size,
//             platforms: tourney.platforms,
//             gamemode: tourney.gamemode
//         })        
//     }
// })

// module.exports = tournament;

const asyncHandler = require('express-async-handler')
const Tournaments = require('../models/TourneyModel')

// @desc Get tournaments
// @route GET /api/tourneys
// @access Private < might not need

const getTourneys = asyncHandler(async (req, res) => {
    const tourneys = await Tournaments.find()

    res.status(200).json(tourneys)
})

module.exports = {
    getTourneys,
}