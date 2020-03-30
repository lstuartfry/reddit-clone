const express = require('express');
const router = express.Router();
const redditAPI = require('../api');

const fetchPosts = async (path, params) => {
	const response = await redditAPI.get(`${path}.json`, params);
	return response;
};

router
	.get('/hot', async (req, res) => {
		try {
			const response = await fetchPosts('/r/all/hot');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/new', async (req, res) => {
		try {
			const response = await fetchPosts('/r/all/new');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/random', async (req, res) => {
		try {
			const response = await fetchPosts('/r/random');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/top', async (req, res) => {
		try {
			const response = await fetchPosts('/all/top');
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/comments', async (req, res) => {
		try {
			const { query } = req;
			const response = await fetchPosts(
				`/r/${query.subreddit}/comments/${query.id}`
			);
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	});

module.exports = router;
