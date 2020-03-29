const express = require('express');
const router = express.Router();
const redditAPI = require('../api');

const fetchPosts = async path => {
	const response = await redditAPI.get(`${path}.json`);
	return response;
};

router
	.get('/hot', async (req, res) => {
		try {
			const response = await fetchPosts('/hot');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/new', async (req, res) => {
		try {
			const response = await fetchPosts('/new');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/random', async (req, res) => {
		try {
			const response = await fetchPosts('/random');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/top', async (req, res) => {
		try {
			const response = await fetchPosts('/top');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	});

module.exports = router;
