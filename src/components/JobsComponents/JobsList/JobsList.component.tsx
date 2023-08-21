import React, { useRef, useState } from 'react';
import {
	ApplyBtn,
	CompanyAndStack,
	CompanyLogo,
	CompanyName,
	CompanyStack,
	JobInfo,
	JobListing,
	JobTitle,
	List,
	Tag,
	Wrapper,
} from './JobsList.style';
import JobAcceptanceProbabilityModal from '../../JobAcceptanceProbabilityModal/JobAcceptanceProbabiltiyPortal.component';
import {
	AddFileIcon,
	FileInput,
	Label,
	RemoveFileButton,
	RemoveFileIcon,
	UploadFileButton,
} from '../../SignUpUserComponents/SignUpForm/SignUpForm.style';
import { ServerResponse } from '../../JobAcceptanceProbabilityModal/JobAcceptanceProbabilityPortal.types';

const mockJobs = [
	{
		id: 1,
		companyLogo: '/images/hr-helper-company.png',
		tags: ['JavaScript', 'React.js', 'Next.js', 'GraphQL'],
		companyName: 'Hr Helper',
		jobTitle: 'Senior Frontend Engineer',
	},
	{
		id: 2,
		companyLogo: '/images/hr-helper-company.png',
		tags: ['Redis', 'AWS', 'REST', 'GraphQL'],
		companyName: 'Hr Helper',
		jobTitle: 'Senior Backend Engineer',
	},
	{
		id: 3,
		companyLogo: '/images/open-cube-company.jpg',
		tags: ['Web3.js', 'React.js', 'Ethereum'],
		companyName: 'Open Cube',
		jobTitle: 'Blockchain Engineer',
	},
	{
		id: 4,
		companyLogo: '/images/open-cube-company.jpg',
		tags: ['ScikitLearn', 'Tensorflow', 'SQL', 'excel'],
		companyName: 'Open Cube',
		jobTitle: 'ML Engineer',
	},
];

const JobsList = () => {
	const [fetchedData, setFetchedData] = useState({});
	const [isModalOpen, setModalOpen] = useState(false);
	const fileInputRef = useRef(null);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const mockApply = async (jobTilte: string) => {
		try {
			const formData = new FormData();

			if (uploadedFile) {
				formData.append('pdfFile', uploadedFile);
			}
			formData.append('jobPosition', jobTilte);

			fetch('http://localhost:8800/execute', {
				method: 'POST',
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					setFetchedData(data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			setModalOpen(true);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
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
		<Wrapper>
			{isModalOpen ? (
				<JobAcceptanceProbabilityModal
					data={fetchedData as ServerResponse}
					isOpen={isModalOpen}
					onClose={() => {
						setModalOpen(false);
						setFetchedData({});
					}}
				>
					<h2>Your Content Here</h2>
					<p>This is a modal example using createPortal!</p>
				</JobAcceptanceProbabilityModal>
			) : null}
			<Label style={{ textAlign: 'center', marginTop: 20 }}>
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
						style={{ width: 200, alignSelf: 'center' }}
						type='button'
						onClick={handleButtonClick}
						disabled={!!uploadedFile}
					>
						<AddFileIcon src='/images/add-file-icon.svg' />
					</UploadFileButton>
				)}
			</Label>
			<List>
				{mockJobs.map((job) => {
					return (
						<JobListing key={job.id}>
							<CompanyLogo
								src={job.companyLogo}
								alt={job.companyName}
							/>
							<JobInfo>
								<JobTitle>{job.jobTitle}</JobTitle>
								<CompanyAndStack>
									<CompanyName>{job.companyName}</CompanyName>
									<CompanyStack>
										{job.tags.map((tag) => {
											return <Tag key={tag}>{tag}</Tag>;
										})}
									</CompanyStack>
								</CompanyAndStack>
							</JobInfo>
							<ApplyBtn onClick={() => mockApply(job.jobTitle)}>Apply</ApplyBtn>
						</JobListing>
					);
				})}
			</List>
		</Wrapper>
	);
};

export default JobsList;
