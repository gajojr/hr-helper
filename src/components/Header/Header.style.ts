import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	width: 100%;
`;

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	background-color: grey;
`;

export const Logo = styled.img`
	width: 120px;
	border-radius: 10px;

	&:hover {
		cursor: pointer;
	}
`;

export const RightSideLinks = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledLink = styled(Link)`
	background-color: #000;
	color: #fff;
	padding: 0 10px;
	border-radius: 10px;
	margin: 5px;
	display: flex;
	align-items: center;
	text-decoration: none;
`;
