import axios from 'axios';

const defaultHeaders = {
	'Content-Type': 'application/json',
};

const instance = axios.create({
	baseURL: '/reddit',
});

const API = {
	get: async (path, params) => {
		const response = await instance.get(path, { params }, defaultHeaders);
		return response.data;
	},
};

export default API;
