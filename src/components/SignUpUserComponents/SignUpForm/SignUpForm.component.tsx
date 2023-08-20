import React, { useRef } from 'react';
import {
	AddFileIcon,
	FileInput,
	Form,
	Label,
	UploadFileButton,
	UrlInput,
} from './SignUpForm.style';

const SignUpForm = () => {
	const fileInputRef = useRef(null);

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			(fileInputRef.current as HTMLInputElement).click();
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files ? e.target.files[0] : null;
		if (selectedFile && selectedFile.type === 'application/pdf') {
			// Handle the PDF upload
			console.log(selectedFile);
		} else {
			console.error('Please select a valid PDF file.');
		}
	};

	return (
		<Form>
			<Label>
				Full name:
				<UrlInput placeholder='Full Name' />
			</Label>
			<Label>
				Email:
				<UrlInput
					placeholder='example@gmail.com'
					type='email'
				/>
			</Label>
			<Label>
				Linkedin:
				<UrlInput placeholder='Linkedin URL' />
			</Label>
			<Label>
				Linkedin:
				<UrlInput placeholder='Linkedin URL' />
			</Label>
			<Label>
				Github:
				<UrlInput placeholder='Github URL' />
			</Label>
			<Label>
				Upload your cv/resume:
				<FileInput
					type='file'
					ref={fileInputRef}
					onChange={handleFileChange}
					accept='.pdf'
				/>
				<UploadFileButton onClick={handleButtonClick}>
					<AddFileIcon src='/images/add-file-icon.svg' />
				</UploadFileButton>
			</Label>
		</Form>
	);
};

export default SignUpForm;
