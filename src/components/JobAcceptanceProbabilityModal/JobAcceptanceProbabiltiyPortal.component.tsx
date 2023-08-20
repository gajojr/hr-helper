import React from 'react';
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

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const LoaderGraph: React.FC<{ percentage: number }> = ({ percentage }) => {
	return (
		<LoaderGraphContainer>
			<PercentageFill percentage={percentage} />
			<PercentageText>{percentage}%</PercentageText>
		</LoaderGraphContainer>
	);
};

const goodSides = ['Great problem solving', 'Effective communication'];
const badSides = [
	'Needs to improve on time management',
	'Lacks experience with TypeScript',
];
const percentage = 85; // Adjust as needed

const JobAcceptanceProbabilityModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
}) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<ModalBackground>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<TopRow>
					<Title>Probability Review</Title>
					<CloseButton onClick={onClose}>X</CloseButton>
				</TopRow>
				<Section>
					<Subtitle>Good side:</Subtitle>
					<List>
						{/* Example list of good sides */}
						{goodSides.map((item, index) => (
							<ListItem key={index}>{item}</ListItem>
						))}
					</List>
				</Section>
				<Section>
					<Subtitle>Bad side:</Subtitle>
					<List>
						{/* Example list of bad sides */}
						{badSides.map((item, index) => (
							<ListItem key={index}>{item}</ListItem>
						))}
					</List>
				</Section>
				<LoaderGraph percentage={percentage} />
			</ModalContent>
		</ModalBackground>,
		document.getElementById('root') as HTMLElement
	);
};

export default JobAcceptanceProbabilityModal;
