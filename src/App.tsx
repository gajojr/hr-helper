import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';
import SignUpRouter from './components/SignUpRouter/SingUpRouter.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const Jobs = lazy(() => import('./pages/Jobs/Jobs.page'));

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={LoadingSpinner()}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path='/sign-up'
					element={
						<Suspense fallback={LoadingSpinner()}>
							<SignUpRouter />
						</Suspense>
					}
				/>
				<Route
					path='/jobs'
					element={
						<Suspense fallback={LoadingSpinner()}>
							<Jobs />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
