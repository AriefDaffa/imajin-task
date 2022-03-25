import styled, { css } from 'styled-components';

const Header = styled.div`
	${(props) =>
		props.title &&
		css`
			font-weight: bold;
			font-size: 50px;
			text-align: center;
		`}
	${(props) =>
		props.h1 &&
		css`
			font-size: 22px;
			line-height: 24px;
			font-weight: 600;
		`}
	${(props) =>
		props.h2 &&
		css`
			font-size: 16px;
			line-height: 20px;
			font-weight: 600;
		`}  
  ${(props) =>
		props.h3 &&
		css`
			font-size: 16px;
			line-height: 16px;
			font-weight: 600;
		`}
  ${(props) =>
		props.h4 &&
		css`
			font-size: 14px;
			line-height: 16px;
			font-weight: 600;
		`}
  ${(props) =>
		props.h5 &&
		css`
			font-size: 12px;
			line-height: 16px;
			font-weight: 600;
		`}
`;

export default Header;
