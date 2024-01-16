import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { newUrl } from '../assets';

const HomeHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<div
				className={`fixed top-0 left-0 right-0 z-[1] w-full bg-white duration-100 delay-50 ${
					isScrolled
						? 'bg-opacity-100 shadow-md text-primary-500'
						: 'bg-opacity-10 text-white'
				}`}
			>
				<div className='py-3 px-5 flex justify-between items-center w-full'>
					<div className='flex items-center gap-2'>
						<div className='w-10 h-10'>
							<img
								src={newUrl(isScrolled ? 'logo-1.svg' : 'logo-2.svg')}
								className='w-auto h-auto'
							/>
						</div>
						<span className='font-extrabold text-3xl'>PetFi</span>
					</div>
					<div className='hidden md:block'>
						<div
							className={`inline-flex gap-5 ${
								isScrolled ? 'text-dark' : 'text-white'
							}`}
						>
							<Link to='/'>Quick view</Link>
							<Link to='#who-we'>Who we</Link>
							<Link to='#adopt-pet'>Adopt pet</Link>
							<Link to='#reach-us'>Reach us</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='relative z-0'>
				<div>
					<video autoPlay loop muted className='w-screen'>
						<source
							src={newUrl(isMobile ? 'header-v.mp4' : 'header-h.mp4')}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
					<div className='absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60'></div>
				</div>
				<div className='absolute md:top-[30%] top-[25%] text-center left-0 right-0'>
					<h1
						className='md:text-7xl text-3xl text-gray-300 font-extrabold tracking-wide md:px-72 px-10 md:mb-10 mb-5'
						style={{ lineHeight: 1.4 }}
					>
						They Await Your Open Heart and Waiting for Adoption
					</h1>
					<div className='flex justify-center'>
						<button className='bg-primary-300 hover:bg-primary-500 text-white px-6 py-2.5 rounded-full mx-2 hidden md:block'>
							Ready for adoption
						</button>
						<button className='text-white border border-white hover:bg-white hover:text-black px-6 py-2.5 rounded-full mx-2'>
							Know more
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeHeader;
