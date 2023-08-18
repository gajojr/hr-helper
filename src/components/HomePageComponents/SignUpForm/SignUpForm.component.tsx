import React, { useRef, useState } from 'react';
import {
	DarkContainer,
	FileLabel,
	HiddenFileInput,
	Input,
	InputContainer,
	Label,
	RemoveFileBtn,
	SubmitButton,
} from './SignUpForm.style';

const SignUpForm = () => {
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

export default SignUpForm;
