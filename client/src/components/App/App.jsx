import React, { useState, useEffect } from 'react';

import API from 'api';
import TopNavigation from '../TopNavigation/TopNavigation';
// import PostList from '../PostList/PostList';

import styles from './styles';

const App = () => {
	const [route, setRoute] = useState('/hot');
	const [posts, setPosts] = useState([]);

	const onRouteChange = async newRoute => {
		setRoute(newRoute);
		const response = await API.get(newRoute);
		console.log('response in component is : ', response);
	};

	useEffect(() => {
		const fetchInitialPosts = async () => {
			const response = await API.get(route);
			console.log('initial response is : ', response);
		};
		fetchInitialPosts();
	}, []);

	return (
		<div className={styles.app}>
			<TopNavigation route={route} onChange={onRouteChange} />
			{/* <PostList posts={posts} /> */}
		</div>
	);
};

export default App;
