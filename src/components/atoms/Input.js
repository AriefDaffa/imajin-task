import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';

const CustomInput = styled.input`
	padding: 8px 16px;
	border: 1px solid #dadada;
	border-radius: 4px;
	outline: none;
	width: 300px;
	margin-top: 8px;
`;

const Input = ({ register, id, type, errors }) => {
	return (
		<>
			<CustomInput
				type={type}
				{...register(id, {
					required: 'Field tidak boleh kosong',
				})}
			/>
			<ErrorMessage
				errors={errors}
				name={id}
				render={({ messages }) =>
					messages &&
					Object.entries(messages).map(([type, message]) => (
						<p style={{ color: '#E0335E' }} key={type}>
							{message}
						</p>
					))
				}
			/>
		</>
	);
};

export default Input;
