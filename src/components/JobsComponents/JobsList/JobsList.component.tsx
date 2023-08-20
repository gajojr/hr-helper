import React, { useState } from 'react';
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
	const [fetchedData, setFetchedData] = useState(null);
	const [isModalOpen, setModalOpen] = useState(false);

	const mockApply = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts/1'
			);
			const data = await response.json();
			setFetchedData(data);
			setModalOpen(true);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<Wrapper>
			{isModalOpen ? (
				<JobAcceptanceProbabilityModal
					isOpen={isModalOpen}
					onClose={() => setModalOpen(false)}
				>
					<h2>Your Content Here</h2>
					<p>This is a modal example using createPortal!</p>
				</JobAcceptanceProbabilityModal>
			) : null}
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
							<ApplyBtn onClick={mockApply}>Apply</ApplyBtn>
						</JobListing>
					);
				})}
			</List>
		</Wrapper>
	);
};

export default JobsList;
