import React, { useState } from 'react';

import List from './List';
import Post from './Post';

const Posts = ({ data, view, setView }) => {
	const [post, setPost] = useState({});

	const selectPost = post => {
		setPost(post);
		setView('post');
	};

	if (view === 'list') {
		return <List data={data} selectPost={selectPost} />;
	}
	return <Post post={post} setView={setView} />;
};

export default Posts;
