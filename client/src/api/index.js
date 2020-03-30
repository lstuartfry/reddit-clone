import axios from 'axios';

const instance = axios.create({
	baseURL: '/reddit',
	headers: {
		'Content-Type': 'application/json',
	},
});

const API = {
	get: async (path, params) => {
		const response = await instance.get(path, { params });
		return response.data;
	},
};

export default API;
