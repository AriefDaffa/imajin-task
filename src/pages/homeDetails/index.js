import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { GET_ALL_AUTHOR, GET_AUTHOR_BOOKS } from '../../api';
import { BooksCard, Container, Header } from '../../components';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../redux/reducer/books';

const PictureContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 32px 0;
`;

const AuthorPicture = styled.img`
	border-radius: 100%;
	width: 200px;
	height: 200px;
	object-fit: cover;
`;

const HeaderCustom = styled(Header)`
	font-weight: normal;
	text-align: center;
`;

const HomeDetails = () => {
	//digunakan untuk mendapatkan parameter pada url
	const { id } = useParams();

	//get redux value
	const value = useSelector((state) => state.author);
	const values = useSelector((state) => state.books);
	const dispatch = useDispatch();

	//fetch all hanya akan berjalan apabila data author tidak terdapat pada redux
	const getAuthor = useQuery('author', async () => await GET_ALL_AUTHOR(), {
		refetchOnWindowFocus: false,
		initialData: [],
		enabled: value.author.length ? false : true,
	});

	useQuery('books', async () => GET_AUTHOR_BOOKS(id), {
		refetchOnWindowFocus: false,
		onSuccess: (res) => {
			if (!values.books.length) {
				dispatch(setBooks(res.books));
			}
		},
	});

	return (
		<Container>
			<PictureContainer>
				{/* data hasil fetch adalah data yang akan dimapping apabila data redux
				tidak ada */}
				<AuthorPicture
					src={
						value.author.length
							? value.authorPhoto[id - 1]
							: getAuthor?.data[id - 1]?.photo
					}
					alt=""
				/>
			</PictureContainer>
			<HeaderCustom h3>Books created by Author</HeaderCustom>
			<Header title="true">
				{value.author.length
					? value.author[id - 1]
					: getAuthor?.data[id - 1]?.name}
			</Header>

			{values.books.length
				? values.books[0].map((data, id) => (
						<BooksCard data={data} key={id} postId={id + 1} />
				  ))
				: null}
		</Container>
	);
};

export default HomeDetails;
