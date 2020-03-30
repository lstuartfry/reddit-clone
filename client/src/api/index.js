import axios from 'axios';

const defaultHeaders = {
	'Content-Type': 'application/json',
};

const API = {
	get: async (path, params) => {
		const response = await axios.get(
			`/reddit${path}`,
			{ params },
			defaultHeaders
		);
		return response.data;
	},
};

export default API;
