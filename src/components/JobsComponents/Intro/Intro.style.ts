import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 100%;
	height: 400px;
	background-color: #2a75ff;
	padding-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	color: #fff;
	text-align: center;
	font-family: Red Hat Display;
	font-size: 48px;
	font-style: normal;
	font-weight: 300;
	line-height: 60px; /* 125% */
	letter-spacing: -1px;
	text-transform: capitalize;
	max-width: 470px;
`;

export const InputContainer = styled.div`
	width: 350px;
	padding: 10px;
	background-color: white;
	border-radius: 25px;
	display: flex;
	align-items: center;
	padding-left: 10px; // Padding to give space for the icon
`;

export const SearchIcon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px; // Space between the icon and the input
`;

export const TextInput = styled.input`
	background: none;
	border: none;
	padding: 8px 12px;
	border-radius: 10px;
	flex: 1; // Take up remaining space
	outline: none;

	&:focus {
		border: none;
		box-shadow: none;
	}
`;
