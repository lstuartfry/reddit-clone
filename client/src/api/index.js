import axios from 'axios';

const instance = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json',
	},
});

const API = {
	get: async (path, params) => {
		const response = await instance.get(path, { params }, defaultHeaders);
		console.log('response in front end API is : ', response);
		return response;
	},
};

export default API;
