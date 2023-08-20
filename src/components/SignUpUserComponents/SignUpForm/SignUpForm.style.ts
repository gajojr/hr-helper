import styled, { css } from 'styled-components';

export const Form = styled.form`
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 4px 30px 12px rgba(0, 0, 0, 0.12);
	width: 367px;
	margin-left: 100px;
	padding: 40px 30px;
`;

export const Label = styled.label`
	color: #403e3d;
	font-family: Inter;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 19.5px;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const textInputStyle = css`
	padding: 15px;
	border: 1px solid grey;
`;

export const UrlInput = styled.input.attrs({
	type: 'url',
})`
	${textInputStyle};
`;

export const TextInput = styled.input.attrs({
	type: 'text',
})`
	${textInputStyle};
`;

export const UploadFileButton = styled.button`
	background: white;
	border: 1px solid grey;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;

	&:hover {
		opacity: 0.8;
	}
`;

export const FileInput = styled.input`
	display: none;
`;

export const AddFileIcon = styled.img`
	width: 20px;
	height: 20px;
`;

export const RemoveFileButton = styled.button`
	background: none; // No background color to make it clean
	border: none; // Remove borders
	cursor: pointer; // Pointer cursor to indicate clickability
	padding: 5px; // Some padding to increase touch target
	margin-left: 10px; // Space between filename and button
	display: flex; // To center the icon
	align-items: center; // Vertically center the icon
	justify-content: center; // Horizontally center the icon
	transition: opacity 0.3s; // Smooth transition for hover effect

	&:hover {
		opacity: 0.7; // Slight fade on hover for feedback
	}

	&:disabled {
		cursor: not-allowed; // Indicate the button is not clickable
		opacity: 0.5; // Fade it out a bit to show it's disabled
	}
`;

// Assuming the icon is an SVG, and we might want to control its size and color:
export const RemoveFileIcon = styled.img`
	width: 20px; // Control width
	height: 20px; // Control height
	fill: #ff0000; // Assuming you want a red color for removal, this will work if the SVG allows fill control

	// If you want the icon to change color on hover (optional)
	&:hover {
		fill: #d90000; // Slightly darker red on hover
	}
`;
