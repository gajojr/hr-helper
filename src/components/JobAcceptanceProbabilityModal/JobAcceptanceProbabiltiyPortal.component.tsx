import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
	CloseButton,
	List,
	ListItem,
	LoaderGraphContainer,
	ModalBackground,
	ModalContent,
	PercentageFill,
	PercentageText,
	Section,
	Subtitle,
	Title,
	TopRow,
} from './JobAcceptanceProbabilityModal.style';
import { ModalProps } from './JobAcceptanceProbabilityPortal.types';

const LoaderGraph: React.FC<{ percentage: number }> = ({ percentage }) => {
	return (
		<LoaderGraphContainer>
			<PercentageFill percentage={percentage} />
			<PercentageText>{percentage}%</PercentageText>
		</LoaderGraphContainer>
	);
};

const JobAcceptanceProbabilityModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	data,
	children,
}) => {
	const [candidatePros, setCandidatePros] = useState([]);
	const [candidateCons, setCandidateCons] = useState([]);
	const [successRate, setSuccesRate] = useState(0);

	useEffect(() => {
		if (!data.data) {
			console.log('usao');
			return;
		}

		setCandidatePros(data.data.jsonOut.candidate_pros);
		setCandidateCons(data.data.jsonOut.candidate_cons);
		setSuccesRate(data.data.jsonOut.candidate_score);
	}, [data]);

	if (!isOpen || !data.data) return null;

	return ReactDOM.createPortal(
		<ModalBackground>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<TopRow>
					<Title>Probability Review</Title>
					<CloseButton onClick={onClose}>X</CloseButton>
				</TopRow>
				<Section>
					<Subtitle>Pros:</Subtitle>
					<List>
						{/* Example list of good sides */}
						{candidatePros.map((item, index) => (
							<ListItem key={index}>{item}</ListItem>
						))}
					</List>
				</Section>
				<Section>
					<Subtitle>Cons:</Subtitle>
					<List>
						{/* Example list of bad sides */}
						{candidateCons.map((item, index) => (
							<ListItem key={index}>{item}</ListItem>
						))}
					</List>
				</Section>
				<LoaderGraph percentage={successRate} />
			</ModalContent>
		</ModalBackground>,
		document.getElementById('root') as HTMLElement
	);
};

export default JobAcceptanceProbabilityModal;
