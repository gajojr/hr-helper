import { styled } from 'styled-components';

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 20px;
	border-radius: 10px;
	max-width: 500px;
	width: 90%;
	position: relative; // To position the close button correctly
`;

export const TopRow = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const CloseButton = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
`;

export const Title = styled.h2`
	color: #000;
	text-align: center;
	font-family: Urbanist;
	font-size: 32px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	margin-block-start: 0;
`;

export const Subtitle = styled.h3`
	color: #000;
	font-family: Red Hat Display;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px; /* 300% */
	letter-spacing: -1px;
	text-transform: capitalize;
	margin-top: 16px;
	margin-block-end: 0;
`;

export const List = styled.ul`
	list-style-type: disc;
	margin-left: 24px;
`;

export const ListItem = styled.li`
	color: #2a75ff;
	font-family: Urbanist;
	font-size: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;

export const Section = styled.div`
	margin-bottom: 16px;
`;

// For the loader graph
export const LoaderGraphContainer = styled.div`
	position: relative;
	width: 100%;
	height: 20px;
	background-color: gray;
	border-radius: 20px;
	overflow: hidden; // Ensure that the PercentageFill doesn't spill outside the container
`;

export const PercentageFill = styled.div<{ percentage: number }>`
	position: absolute;
	top: 0;
	left: 0;
	width: ${(props) => props.percentage}%;
	height: 100%;
	background-color: #2a75ff;
`;

export const PercentageText = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 16px; // Adjust as needed
	color: white;
	z-index: 1; // Ensure text stays on top
`;
