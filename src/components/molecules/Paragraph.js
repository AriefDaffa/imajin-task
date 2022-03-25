import React from 'react';
import styled from 'styled-components';

const ParagraphText = styled.div`
	color: #6f7376;
	text-align: center;
`;

const ParagraphCard = styled.div`
	margin: 24px 0;
	padding: 24px 14px;
	border-radius: 12px;
	border: 1px dotted #dadada;
`;

const Paragraph = () => {
	return (
		<>
			<ParagraphCard>
				<ParagraphText>
					List dibawah merupakan list author buku, klik pada <b>name</b> dan
					<b> gambar</b> milik author dibawah untuk melihat detail lebih lanjut
				</ParagraphText>
			</ParagraphCard>
		</>
	);
};

export default Paragraph;
