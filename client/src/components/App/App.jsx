import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

import API from 'api';
import TopNavigation from '../TopNavigation/TopNavigation';
import Posts from '../Posts/Posts';

const App = () => {
	const [route, setRoute] = useState('/hot');
	const [data, setData] = useState(null);
	const [view, setView] = useState('list');

	const onRouteChange = async newRoute => {
		setRoute(newRoute);
		setView('list');
		const response = await API.get(newRoute);
		setData(response.data);
	};

	useEffect(() => {
		const fetchInitialPosts = async () => {
			const response = await API.get(route);
			setData(response.data);
		};
		fetchInitialPosts();
	}, []);

	return (
		<div>
			<TopNavigation route={route} onChange={onRouteChange} />
			<Posts data={data} view={view} setView={setView} />
		</div>
	);
};

export default hot(App);
