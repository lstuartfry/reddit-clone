const express = require('express');
const router = express.Router();
const redditAPI = require('../api');

router.get('/', async (req, res) => {
	const { query } = req.body.params;
	try {
	} catch (error) {
		console.log('error in youtubeAPI is : ', error);
	}
});

module.exports = router;
