import React from 'react';
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
	return (
		<Wrapper>
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
							<ApplyBtn>Apply</ApplyBtn>
						</JobListing>
					);
				})}
			</List>
		</Wrapper>
	);
};

export default JobsList;
