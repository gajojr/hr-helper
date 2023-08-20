import {
	InputContainer,
	SearchIcon,
	TextInput,
	Title,
	Wrapper,
} from './Intro.style';

const Intro = () => {
	return (
		<Wrapper>
			<Title>
				Find A <b>Remote Job</b> Work From <b>Anywhere</b>
			</Title>
			<InputContainer>
				<SearchIcon
					src='/images/search.png'
					alt='Search'
				/>
				<TextInput
					type='text'
					placeholder='Search...'
				/>
			</InputContainer>
		</Wrapper>
	);
};

export default Intro;
