import React, { useState, useEffect } from 'react';

import API from 'api';
import styles from './styles.scss';

const Post = ({ post, setView }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const response = await API.get('/comments', {
				id: post.data.id,
				subreddit: post.data.subreddit,
			});
			setComments(response[1].data.children);
		};
		fetchComments();
	}, []);
	const renderComments = () => {
		if (!comments.length) {
			return <div>Please wait...</div>;
		}
		return (
			<div className={styles.commentList}>
				{comments.map(comment => (
					<div key={comment.data.id} className={styles.comment}>
						{comment.data.body}
					</div>
				))}
			</div>
		);
	};
	return (
		<div className={styles.post}>
			<div className={styles.postHeading}>
				<div className={styles.postThumbnail}>
					<img src={post.data.thumbnail} />
				</div>
				<div className={styles.postTitle}>{post.data.title}</div>
			</div>
			<div className={styles.postComments}>{renderComments()}</div>
		</div>
	);
};

export default Post;
