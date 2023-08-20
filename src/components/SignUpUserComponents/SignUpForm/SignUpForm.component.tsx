import React, { useRef, useState } from 'react';
import {
	AddFileIcon,
	FileInput,
	Form,
	Label,
	RemoveFileButton,
	RemoveFileIcon,
	UploadFileButton,
	UrlInput,
} from './SignUpForm.style';

const SignUpForm = () => {
	const fileInputRef = useRef(null);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			(fileInputRef.current as HTMLInputElement).click();
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files ? e.target.files[0] : null;

		console.log(selectedFile);
		if (!selectedFile) {
			return;
		}

		if (selectedFile && selectedFile.type === 'application/pdf') {
			setUploadedFile(selectedFile);
		} else {
			console.error('Please select a valid PDF file.');
		}
	};

	const handleFileRemove = (e: React.MouseEvent) => {
		e.stopPropagation();

		setUploadedFile(null);
		if (fileInputRef.current) {
			(fileInputRef.current as HTMLInputElement).value = ''; // Clear the file input
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
				{uploadedFile ? (
					<>
						<span>{uploadedFile.name}</span>
						<RemoveFileButton>
							{/* Assuming you have a remove icon similar to add-file-icon.svg */}
							<RemoveFileIcon
								src='/images/close-icon.svg'
								onClick={handleFileRemove}
							/>
						</RemoveFileButton>
					</>
				) : (
					<UploadFileButton
						type='button'
						onClick={handleButtonClick}
						disabled={!!uploadedFile}
					>
						<AddFileIcon src='/images/add-file-icon.svg' />
					</UploadFileButton>
				)}
			</Label>
		</Form>
	);
};

export default SignUpForm;
