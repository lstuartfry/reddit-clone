import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

import API from 'api';
import TopNavigation from '../TopNavigation/TopNavigation';
import Pagination from '../Pagination/Pagination';
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

	const onPaginationClick = async params => {
		const response = await API.get(route, { count: 20, ...params });
		setData(response.data);
	};

	useEffect(() => {
		const fetchInitialPosts = async () => {
			const response = await API.get(route);
			setData(response.data);
		};
		fetchInitialPosts();
	}, []);

	const renderPagination = () => {
		if (view === 'list' && !!data) {
			return (
				<Pagination
					onClick={onPaginationClick}
					after={data.after}
					before={data.before}
				/>
			);
		}
	};

	return (
		<div>
			<TopNavigation route={route} onChange={onRouteChange} />
			{renderPagination()}
			<Posts data={data} view={view} setView={setView} />
			{renderPagination()}
		</div>
	);
};

export default hot(App);
