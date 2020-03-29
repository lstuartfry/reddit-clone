const axios = require('axios');
const instance = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json',
	},
});
