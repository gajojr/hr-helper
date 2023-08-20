import Header from '../../components/Header/Header.component';
import { Ellipse1 } from '../../components/SignUpUserComponents/Ellipse1/Ellipse1.component';
import Ellipse2 from '../../components/SignUpUserComponents/Ellipse2/Ellipse2.component';
import PageDescription from '../../components/SignUpUserComponents/PageDescription/PageDescription.components';
import SignUpForm from '../../components/SignUpUserComponents/SignUpForm/SignUpForm.component';
import { BlueLine, ContentWrapper, Main } from './SignUpUser.style';

const SignUpUser = () => {
	return (
		<>
			<Header />
			<Main>
				<Ellipse1 />
				<Ellipse2 />
				<ContentWrapper>
					<BlueLine />
					<PageDescription />
					<SignUpForm />
				</ContentWrapper>
			</Main>
		</>
	);
};

export default SignUpUser;
