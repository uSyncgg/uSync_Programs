const express = require('express');
const router = express.Router();
const { tournament } = require('../controllers/TourneyController');

router.post('/tournaments', tournament)

module.exports = router;
