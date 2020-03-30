import React from 'react';

import styles from './styles';

const Pagination = ({ onClick, after, before }) => (
	<div className={styles.pagination}>
		{before && <button onClick={() => onClick({ before })}>Prev page</button>}
		{after && <button onClick={() => onClick({ after })}>Next page</button>}
	</div>
);

export default Pagination;
