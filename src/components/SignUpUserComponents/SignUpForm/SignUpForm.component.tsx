import React, { useRef, useState } from 'react';
import {
	AddFileIcon,
	ApplyBtn,
	FileInput,
	Form,
	Label,
	RemoveFileButton,
	RemoveFileIcon,
	TextInput,
	UploadFileButton,
	UrlInput,
} from './SignUpForm.style';
import { IFormEvent } from './SignUpForm.types';
import { useDispatch } from 'react-redux';
import {
	selectEmail,
	selectFullName,
	selectGithub,
	selectLinkedin,
	selectPdfFile,
} from '../../../redux/reducers/Auth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const fileInputRef = useRef(null);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const handleSubmit = async (e: IFormEvent) => {
		e.preventDefault();

		const fullName = e.target.fullName.value;
		const email = e.target.email.value;
		const linkedin = e.target.linkedin.value;
		const github = e.target.github.value;
		const pdfFile = e.target.pdfFile.files[0];

		dispatch(selectFullName(fullName));
		dispatch(selectEmail(email));
		dispatch(selectLinkedin(linkedin));
		dispatch(selectGithub(github));
		dispatch(selectPdfFile(pdfFile));

		navigate('/jobs');
	};

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
		<Form onSubmit={handleSubmit}>
			<Label>
				Full name:
				<TextInput
					placeholder='Full Name'
					name='fullName'
				/>
			</Label>
			<Label>
				Email:
				<TextInput
					placeholder='example@gmail.com'
					type='email'
					name='email'
				/>
			</Label>
			<Label>
				Linkedin:
				<UrlInput
					placeholder='Linkedin URL'
					name='linkedin'
				/>
			</Label>
			<Label>
				Github:
				<UrlInput
					placeholder='Github URL'
					name='github'
				/>
			</Label>
			<Label>
				Upload your cv/resume:
				<FileInput
					name='pdfFile'
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
			<ApplyBtn>Apply</ApplyBtn>
		</Form>
	);
};

export default SignUpForm;
