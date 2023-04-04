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