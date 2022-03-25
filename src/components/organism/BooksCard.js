import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Header from '../atoms/Header';

const Card = styled.div`
	padding: 16px;
	display: flex;
	height: 80px;
	border: 1px solid #dadada;
	border-radius: 12px;
	margin: 16px 0;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`;

const CardBody = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding-left: 12px;
	justify-content: space-between;
`;

const HeaderPrice = styled(Header)`
	font-weight: normal;
`;

const PriceSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

//fungsi untuk menambahkan koma setelah tiga digit
const addKoma = (x) => {
	let parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	return parts.join(',');
};

const BooksCard = ({ data, postId }) => {
	const { id } = useParams();
	//get redux value

	return (
		<Card>
			<CardBody>
				<Header h1>{data.judul}</Header>

				<PriceSection>
					<HeaderPrice h2>Rp. {addKoma(data.harga)}</HeaderPrice>
					<Button url={`/books/${id}/edit/${postId}`} text="Edit" />
				</PriceSection>
			</CardBody>
		</Card>
	);
};

export default BooksCard;
