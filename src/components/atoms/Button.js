import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
	text-decoration: none;
	color: black;
	padding: 0 20px;
	border: 1px solid #dadada;
	border-radius: 8px;

	&:hover {
		color: white;
		background-color: black;
		transition: 0.3s;
	}
`;

const Button = ({ url, text }) => {
	return (
		<LinkButton to={url}>
			<div>{text}</div>
		</LinkButton>
	);
};

export default Button;
