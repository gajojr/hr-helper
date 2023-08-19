import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	width: 100%;
	background: #fff;
	box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.18);
	position: fixed;
	z-index: 2;
`;

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
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
	background-color: #2a75ff;
	color: #fff;
	padding: 0 10px;
	border-radius: 10px;
	margin: 5px;
	display: flex;
	align-items: center;
	text-decoration: none;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-family: Red Hat Display;
	font-weight: 600;
`;
