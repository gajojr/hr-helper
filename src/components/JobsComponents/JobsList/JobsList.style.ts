import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 70%;
`;

export const List = styled.ul`
	margin-top: 50px;
	width: 100%;
	list-style-type: none;
`;

export const JobListing = styled.li`
	margin-bottom: 20px;
	width: 100%;
	background-color: #2a75ff;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	padding: 10px;
`;

export const JobInfo = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
`;

export const CompanyLogo = styled.img`
	border-radius: 50%;
	width: 100px;
	height: 100px;
`;

export const JobTitle = styled.h4`
	font-weight: 800;
	font-weight: 800;
	color: #fff;
`;

export const CompanyAndStack = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const CompanyName = styled.h4`
	font-weight: 400;
	color: #fff;
`;

export const CompanyStack = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: row;
`;

export const Tag = styled.li`
	border-radius: 10px;
	padding: 5px 15px;
	background-color: #fff;
	color: #2a75ff;
	text-align: center;
	font-family: Red Hat Display;
	font-size: 11px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-right: 10px;
`;

export const ApplyBtn = styled.button`
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	padding: 10px 35px;
	border: none;
	background-color: #fff;
	color: #2a75ff;
	text-align: center;
	font-family: Red Hat Display;
	font-size: 16px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;

	&:hover {
		cursor: pointer;
	}
`;
