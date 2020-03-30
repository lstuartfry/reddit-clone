import React from 'react';
import styled from 'styled-components';

import styles from './styles';

const StyledButton = styled.button`
	border: none;
	background: transparent;
	font-weight: ${props => (props.isActive ? 800 : 400)};
	&:hover {
		color: #0fade9;
		cursor: pointer;
	}
`;
const Button = ({ children, isActive, onClick }) => (
	<StyledButton isActive={isActive} onClick={onClick}>
		{children}
	</StyledButton>
);

const TopNavigation = ({ onChange, route }) => (
	<div className={styles.topNavigation}>
		<div className={styles.logoContainer}>
			<img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c531.png" />
		</div>
		<div className={styles.routeList}>
			<Button isActive={route === '/hot'} onClick={() => onChange('/hot')}>
				hot
			</Button>
			<Button isActive={route === '/top'} onClick={() => onChange('/top')}>
				top
			</Button>
			<Button isActive={route === '/new'} onClick={() => onChange('/new')}>
				new
			</Button>
		</div>
	</div>
);

export default TopNavigation;
