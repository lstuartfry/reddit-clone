const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://www.reddit.com/r/all',
	headers: {
		'Content-Type': 'application/json',
	},
});

module.exports = instance;
