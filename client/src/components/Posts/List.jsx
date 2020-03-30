import React from 'react';

import styles from './styles';

const List = ({ data, selectPost }) => {
	const renderPosts = () =>
		data.children.map(post => (
			<div key={post.data.id} onClick={() => selectPost(post)}>
				<div className={styles.postThumbnail}>
					<img src={post.data.thumbnail} />
				</div>
				<div className={styles.postTitle}>{post.data.title}</div>
			</div>
		));

	if (!data) {
		return <div>Please wait...</div>;
	}
	return <div className={styles.list}>{renderPosts()}</div>;
};

export default List;
