import React from 'react';
import './Intro.style.css';

export const Intro = () => {
	return (
		<div className='div'>
			<div className='overlap'>
				<div className='overlap-group'>
					<div className='ellipse' />
					<div className='ellipse-2' />
					<img
						className='img'
						alt='Ellipse'
						src='./images/ellipse-1.svg'
					/>
					<img
						className='worker'
						alt='Worker'
						src='./images/homepage-worker-graphics.png'
					/>
					<div className='ellipse-3' />
					<div className='ellipse-4' />
					<div className='frame'>
						<p className='p'>
							Connecting Opportunities: Your Gateway to Seamless Remote
							Employment Solutions
						</p>
						<p className='text-wrapper-2'>
							Revolutionizing the traditional work landscape, hr helper is at
							the forefront of a global shift towards remote employment
							solutions. By seamlessly connecting forward-thinking employers
							with a vast pool of exceptional talent and empowering skilled
							professionals worldwide who seek dynamic remote job opportunities,
							hr helper is reshaping the way businesses and individuals approach
							work in an increasingly interconnected world.
						</p>
					</div>
				</div>
				<div className='overlap-2'>
					<div className='ellipse-5' />
					<div className='ellipse-6' />
					<div className='section'>
						<div className='form'>
							<div className='div-form-input-group'>
								<div className='div-form-input'>
									<div className='input-job-title-or'>
										<div className='div-placeholder'>
											<div className='text-wrapper-3'>Job title or keyword</div>
										</div>
									</div>
									<img
										className='icon'
										alt='Pseudo'
										src='./images/search.svg'
									/>
								</div>
								<div className='div-form-input'>
									<div className='input-search-city'>
										<div className='div-wrapper'>
											<div className='text-wrapper-3'>Place</div>
										</div>
									</div>
									<img
										className='icon'
										alt='Pseudo'
										src='./images/location.svg'
									/>
									<img
										className='button-clear'
										alt='Button clear'
										src='./images/close-icon.svg'
									/>
								</div>
							</div>
							<div className='div-form-submit'>
								<div className='button'>
									<div className='text-wrapper-4'>Search Jobs</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className='text-wrapper-5'>Work Anywhere with Remote Jobs!</p>
			<div className='div-hiw-text'>
				<div className='ordered-list'>
					<div className='overlap-group-3'>
						<div className='pseudo-2' />
						<div className='item'>
							<div className='text-wrapper-6'>
								Receive Exclusive Job Invitations
							</div>
							<div className='p-2'>
								<p className='showcases-your'>
									Showcases your profile to attract employers for roles
									you&#39;ll adore, making you stand out. This way, companies
									can directly connect with you
								</p>
							</div>
						</div>
						<div className='item-2'>
							<p className='text-wrapper-6'>
								Effortless Application with a Single Click – Save Time!
							</p>
							<div className='p-2'>
								<p className='text-wrapper-7'>
									Say goodbye to lengthy application forms! Once Phil has your
									essential information, applying to the majority of jobs
									becomes just a simple click away.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
