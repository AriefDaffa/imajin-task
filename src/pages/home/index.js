import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AuthorCard, Container, Header, Paragraph } from '../../components';
import { vector1 } from '../../assets';
import { useQuery } from 'react-query';
import { GET_ALL_AUTHOR } from '../../api';
import { useDispatch } from 'react-redux';
import { resetBook } from '../../redux/reducer/books';

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	width: 50%;
	height: 50%;
`;

const Home = () => {
	const dispatch = useDispatch();
	const { data } = useQuery('author', async () => GET_ALL_AUTHOR(), {
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		// digunakan untuk mereset array yang telah ada pada page books
		dispatch(resetBook());
	}, [data]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Container>
			<ImageContainer>
				<Image src={vector1} alt="" />
			</ImageContainer>
			<Header title="true">Author List</Header>
			<Paragraph />
			{data?.map((data, id) => (
				<AuthorCard data={data} key={id} />
			))}
		</Container>
	);
};

export default Home;
