import React, { useEffect } from 'react';
import { Container, Form, Header } from '../../components';
import styled from 'styled-components';
import { GET_AUTHOR_BOOKS } from '../../api';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	setBooks,
	setBooksValue,
	setCurrentBook,
} from '../../redux/reducer/books';

const CustomContainer = styled(Container)`
	display: flex;
	flex-direction: column;
`;

const HeaderCustom = styled(Header)`
	font-weight: normal;
	text-align: center;
`;

const EditBooks = () => {
	const { postId } = useParams();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: 'all' });
	const dispatch = useDispatch();

	//get redux value
	const value = useSelector((state) => state.books);

	useQuery('books', async () => GET_AUTHOR_BOOKS(postId), {
		refetchOnWindowFocus: false,
		onSettled: (res) => {
			if (!value.books.length) {
				dispatch(setBooks(res.books));
			}
		},
	});

	const submitHandler = (data) => {
		dispatch(setBooksValue(data));
		navigate(-1);
	};

	useEffect(() => {
		dispatch(setCurrentBook(parseInt(postId - 1)));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<CustomContainer style={{ height: '100vh' }}>
			<HeaderCustom h3>Edit Buku</HeaderCustom>
			{value.books.length ? (
				<Header title="true">{value.books[0][postId - 1].judul}</Header>
			) : null}
			<Form
				register={register}
				handleSubmit={handleSubmit}
				submitHandler={submitHandler}
				errors={errors}
			/>
		</CustomContainer>
	);
};

export default EditBooks;
