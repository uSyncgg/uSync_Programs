const express = require('express');
const router = express.Router();
const {getTourneys} = require('../controllers/TourneyController')


router.get('/', getTourneys)

// router.post('/tournaments', tournament)

module.exports = router;
