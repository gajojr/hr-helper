import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DarkContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	background-color: #2c2c2c;
	color: #eaeaea;
	min-height: 100vh;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputContainer = styled.div`
	margin: 10px;
`;

const Label = styled.label`
	font-family: 'Roboto', sans-serif;
`;

const Input = styled.input.attrs({
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

const FileLabel = styled.label`
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

const HiddenFileInput = styled.input`
	display: none;
`;

const RemoveFileBtn = styled.button`
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

const SubmitButton = styled.button`
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

const App: React.FC = () => {
	const [linkedin, setLinkedin] = useState('');
	const [github, setGithub] = useState('');
	const pdfRef = useRef<HTMLInputElement | null>(null);
	const [uploadedFile, setUploadedFile] = useState<string | null>(null);
	const [errors, setErrors] = useState<{
		linkedin?: string;
		github?: string;
		pdf?: string;
	}>({});

	const isValidUrl = (url: string) => {
		try {
			new URL(url);
			return true;
		} catch (_) {
			return false;
		}
	};

	const handleSubmit = () => {
		const newErrors: typeof errors = {};

		if (!isValidUrl(linkedin)) {
			newErrors.linkedin = 'Invalid LinkedIn URL.';
		}
		if (!isValidUrl(github)) {
			newErrors.github = 'Invalid GitHub URL.';
		}
		if (!uploadedFile) {
			newErrors.pdf = 'Please upload a CV/Resume.';
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			// All validations passed. Process the form data.
			console.log('Submitting data...');
			alert('Success');
		}
	};

	const handlePdfUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			setUploadedFile(file.name);
			// Continue with your PDF processing logic
		}
	};

	const handleFileRemove = () => {
		if (pdfRef.current) {
			pdfRef.current.value = ''; // Reset the file input
		}
		setUploadedFile(null); // Clear the filename from state
	};

	return (
		<DarkContainer>
			<InputContainer>
				<Label>
					Linkedin:
					<Input
						type='url'
						placeholder='LinkedIn URL'
						value={linkedin}
						onChange={(e) => setLinkedin(e.target.value)}
					/>
				</Label>
				{errors.linkedin && (
					<div style={{ color: 'red' }}>{errors.linkedin}</div>
				)}
			</InputContainer>
			<InputContainer>
				<Label>
					Github:
					<Input
						type='url'
						placeholder='GitHub URL'
						value={github}
						onChange={(e) => setGithub(e.target.value)}
					/>
				</Label>
				{errors.github && <div style={{ color: 'red' }}>{errors.github}</div>}
			</InputContainer>
			<InputContainer>
				{uploadedFile ? (
					<div>
						<span>Uploaded: {uploadedFile}</span>
						<RemoveFileBtn onClick={handleFileRemove}>Remove</RemoveFileBtn>
					</div>
				) : (
					<FileLabel htmlFor='resumeUpload'>
						Upload CV/Resume
						<HiddenFileInput
							id='resumeUpload'
							type='file'
							accept='.pdf'
							ref={pdfRef}
							onChange={handlePdfUpload}
						/>
					</FileLabel>
				)}
				{errors.pdf && <div style={{ color: 'red' }}>{errors.pdf}</div>}
			</InputContainer>
			<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
		</DarkContainer>
	);
};

export default App;
