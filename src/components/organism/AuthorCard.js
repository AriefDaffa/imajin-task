import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addAuthorName, addAuthorPhoto } from '../../redux/reducer/author';
import Header from '../atoms/Header';

const Card = styled.div`
	padding: 16px;
	display: flex;
	border: 1px solid #dadada;
	border-radius: 12px;
	margin: 16px 0;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.03);
	}
`;

const AuthorImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 4px;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 12px;
`;

const Links = styled(Link)`
	text-decoration: none;
	color: black;
`;

const AuthorCard = ({ data }) => {
	// fungsi dispatch redux
	const dispatch = useDispatch();
	//get redux value
	const value = useSelector((state) => state.author);

	// useEffect digunakan untuk memasukkan data pada redux
	// data tersebut nantinya dapat digunakan di page details
	useEffect(() => {
		// if akan berjalan apabila data author di redux kurang dari total data author
		if (value.author.length < value.totalAuthor) {
			dispatch(addAuthorPhoto(data.photo));
			dispatch(addAuthorName(data.name));
		}
	}, [value]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Card>
			<Links to={`/books/${data.id}`}>
				<AuthorImage src={data.photo} alt="" />
			</Links>
			<CardBody>
				<Links to={`/books/${data.id}`}>
					<Header h1>{data.name}</Header>
				</Links>
				<Header h2 style={{ paddingTop: '8px' }}>
					Nomor Telepon
				</Header>
				<div>{data.telp}</div>
			</CardBody>
		</Card>
	);
};

export default AuthorCard;
