import {
	BottomWrapper,
	Button,
	ClearIcon,
	CountryInput,
	Ellipse,
	Ellipse2,
	Ellipse5,
	Ellipse6,
	EllipseImg,
	EllipseImg3,
	EllipseImg4,
	Form,
	FormInput,
	FormInputGroup,
	FormWrapper,
	Frame,
	Icon,
	InputJobTitle,
	InputWrapper,
	Item,
	Item2,
	OrderedList,
	Overlap,
	Overlap2,
	OverlapGroup,
	OverlapGroup3,
	P2,
	Pseudo2,
	SubmitWrapper,
	TextWrapper,
	TextWrapper2,
	TextWrapper3,
	TextWrapper4,
	TextWrapper5,
	TextWrapper6,
	TextWrapper7,
	WorkerImg,
	Wrapper,
} from './Intro.style';

export const Intro = () => {
	return (
		<Wrapper>
			<Overlap>
				<OverlapGroup>
					<Ellipse />
					<Ellipse2 />
					<EllipseImg
						alt='Ellipse'
						src='./images/ellipse-1.svg'
					/>
					<WorkerImg
						alt='Worker'
						src='./images/homepage-worker-graphics.png'
					/>
					<EllipseImg3 />
					<EllipseImg4 />
					<Frame>
						<TextWrapper>
							Connecting Opportunities: Your Gateway to Seamless Remote
							Employment Solutions
						</TextWrapper>
						<TextWrapper2>
							Revolutionizing the traditional work landscape, hr helper is at
							the forefront of a global shift towards remote employment
							solutions. By seamlessly connecting forward-thinking employers
							with a vast pool of exceptional talent and empowering skilled
							professionals worldwide who seek dynamic remote job opportunities,
							hr helper is reshaping the way businesses and individuals approach
							work in an increasingly interconnected world.
						</TextWrapper2>
					</Frame>
				</OverlapGroup>
				<Overlap2>
					<Ellipse5 />
					<Ellipse6 />
					<FormWrapper>
						<Form>
							<FormInputGroup>
								<FormInput>
									<InputJobTitle>
										<InputWrapper>
											<TextWrapper3>Job title or keyword</TextWrapper3>
										</InputWrapper>
									</InputJobTitle>
									<Icon
										alt='Pseudo'
										src='./images/search.svg'
									/>
								</FormInput>
								<FormInput>
									<CountryInput>
										<InputWrapper>
											<TextWrapper3>Place</TextWrapper3>
										</InputWrapper>
									</CountryInput>
									<Icon
										alt='Pseudo'
										src='./images/location.svg'
									/>
									<ClearIcon
										alt='Button clear'
										src='./images/close-icon.svg'
									/>
								</FormInput>
							</FormInputGroup>
							<SubmitWrapper>
								<Button>
									<TextWrapper4>Search Jobs</TextWrapper4>
								</Button>
							</SubmitWrapper>
						</Form>
					</FormWrapper>
				</Overlap2>
			</Overlap>
			<TextWrapper5>Work Anywhere with Remote Jobs!</TextWrapper5>
			<BottomWrapper>
				<OrderedList>
					<OverlapGroup3>
						<Pseudo2 />
						<Item>
							<TextWrapper6>Receive Exclusive Job Invitations</TextWrapper6>
							<P2>
								<TextWrapper7>
									Showcases your profile to attract employers for roles
									you&#39;ll adore, making you stand out. This way, companies
									can directly connect with you
								</TextWrapper7>
							</P2>
						</Item>
						<Item2>
							<TextWrapper6>
								Effortless Application with a Single Click – Save Time!
							</TextWrapper6>
							<P2>
								<TextWrapper7>
									Say goodbye to lengthy application forms! Once Phil has your
									essential information, applying to the majority of jobs
									becomes just a simple click away.
								</TextWrapper7>
							</P2>
						</Item2>
					</OverlapGroup3>
				</OrderedList>
			</BottomWrapper>
		</Wrapper>
	);
};

export default Intro;
