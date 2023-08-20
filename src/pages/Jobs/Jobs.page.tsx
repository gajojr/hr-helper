import React from 'react';
import Header from '../../components/Header/Header.component';
import { Main } from './Jobs.style';
import Intro from '../../components/JobsComponents/Intro/Intro.component';
import JobsList from '../../components/JobsComponents/JobsList/JobsList.component';

const Jobs = () => {
	return (
		<div>
			<Header />
			<Main>
				<Intro />
				<JobsList />
			</Main>
		</div>
	);
};

export default Jobs;
