const express = require('express');
const router = express.Router();

const redditAPI = require('../api');

const fetchPosts = async (path, params) => {
	console.log('params in fetchPost are : ', params);
	const response = await redditAPI.get(`/r${path}.json`, {
		params: {
			limit: 20,
			...params,
		},
	});
	return response;
};

router
	.get('/hot', async (req, res) => {
		try {
			const response = await fetchPosts('/all/hot', req.query);
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/new', async (req, res) => {
		try {
			const response = await fetchPosts('/all/new', req.query);
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/top', async (req, res) => {
		try {
			const response = await fetchPosts('/all/top', req.query);
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	})
	.get('/comments', async (req, res) => {
		try {
			const { query } = req;
			const response = await fetchPosts(
				`/${query.subreddit}/comments/${query.id}`,
				{
					limit: 100,
				}
			);
			res.send(response.data);
		} catch (error) {
			console.log('error in redditAPI is : ', error);
		}
	});

module.exports = router;
