import { styled } from 'styled-components';

export const DarkContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	background-color: #2c2c2c;
	color: #eaeaea;
	min-height: 100vh;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputContainer = styled.div`
	margin: 10px;
`;

export const Label = styled.label`
	font-family: 'Roboto', sans-serif;
`;

export const Input = styled.input.attrs({
	type: 'url',
})`
	margin-left: 15px;
	background-color: #444;
	color: #eaeaea;
	border: none;
	border-radius: 5px;
	padding: 10px 15px;
	margin-bottom: 15px;
	width: 300px;
	outline: none;
	transition: background-color 0.3s;

	&:hover {
		background-color: #555;
	}

	&:focus {
		background-color: #333;
	}

	&::placeholder {
		color: #888;
	}
`;

export const FileLabel = styled.label`
	background-color: #444;
	color: #eaeaea;
	padding: 10px 15px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #555;
	}
`;

export const HiddenFileInput = styled.input`
	display: none;
`;

export const RemoveFileBtn = styled.button`
	margin-left: 10px;
	background-color: red;
	color: white;
	border: none;
	border-radius: 10px;
	padding: 10px 15px;

	&:hover {
		cursor: pointer;
	}
`;

export const SubmitButton = styled.button`
	background-color: #555;
	color: #eaeaea;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s;
	margin-top: 15px;

	&:hover {
		background-color: #666;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
