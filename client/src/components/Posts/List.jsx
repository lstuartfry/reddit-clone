import React from 'react';

import styles from './styles.scss';

const List = ({ data, selectPost }) => {
	const renderPosts = () =>
		data.children.map(post => (
			<div key={post.data.id} onClick={() => selectPost(post)}>
				<div className={styles.postUps}>
					<div>⬆</div>
					<div>{post.data.ups}</div>
					<div>⬇</div>
				</div>
				<div className={styles.postThumbnail}>
					<img src={post.data.thumbnail} />
				</div>
				<div className={styles.postText}>
					<div className={styles.postTitle}>{post.data.title}</div>
					<div className={styles.postAuthor}>
						Submitted by {post.data.author}
					</div>
					<div className={styles.postComments}>
						{post.data.num_comments} comments
					</div>
				</div>
			</div>
		));

	if (!data) {
		return <div>Please wait...</div>;
	}
	return <div className={styles.list}>{renderPosts()}</div>;
};

export default List;
