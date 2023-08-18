import React from 'react';
import {
	HeaderWrapper,
	Logo,
	Nav,
	RightSideLinks,
	StyledLink,
} from './Header.style';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<HeaderWrapper>
			<Nav>
				<Logo
					src='./images/logo.png'
					alt='logo'
					onClick={() => navigate('/')}
				/>
				<RightSideLinks>
					<StyledLink to='/sign-in'>Sign In</StyledLink>
					<StyledLink to='/sign-up?type=user'>Sign Up</StyledLink>
					<StyledLink to='/jobs'>Jobs</StyledLink>
				</RightSideLinks>
			</Nav>
		</HeaderWrapper>
	);
};

export default Header;
