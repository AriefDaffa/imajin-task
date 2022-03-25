import React from 'react';
import Input from '../atoms/Input';
import styled from 'styled-components';
import Header from '../atoms/Header';

const CustomForm = styled.form`
	display: flex;
	justify-content: center;
`;

const Flexer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Submit = styled.input`
	padding: 10px 0;
	margin-top: 20px;
	border-radius: 4px;
	border: 1px solid #dadada;
	text-align: center;
	background-color: white;

	&:hover {
		color: white;
		background-color: black;
		transition: 0.3s;
		cursor: pointer;
	}
`;

const Label = styled(Header)`
	margin-top: 16px;
`;

const Form = ({ register, handleSubmit, submitHandler, errors }) => {
	return (
		<CustomForm onSubmit={handleSubmit(handleSubmit(submitHandler))}>
			<Flexer>
				<Label h3>Masukkan judul buku</Label>
				<Input
					type="text"
					placeholder="Masukkan Buku"
					register={register}
					id="judul"
					errors={errors}
				/>
				<Label h3>Masukkan harga buku</Label>
				<Input
					type="number"
					placeholder="Masukkan Harga Buku"
					register={register}
					id="harga"
					errors={errors}
				/>
				<Submit type="submit" />
			</Flexer>
		</CustomForm>
	);
};

export default Form;
