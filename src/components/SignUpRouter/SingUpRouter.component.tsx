// for different type of users (regular and employer)
import { lazy } from 'react';
import { useSearchParams } from 'react-router-dom';

const SignUpUser = lazy(() => import('../../pages/SignUpUser/SignUpUser.page'));

function SignUpRouter() {
	const [searchParams] = useSearchParams();
	const userType = searchParams.get('type');

	if (userType === 'user') {
		return <SignUpUser />;
	}

	if (userType === 'employer') {
		return <></>;
		// return <SignUpEmployer />;
	}

	return <div>Invalid user type or no user type specified.</div>;
}

export default SignUpRouter;
