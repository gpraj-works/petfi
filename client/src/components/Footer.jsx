import { Link } from 'react-router-dom';
import { newUrl } from '../assets';

const Footer = () => {
	return (
		<div className='bg-primary-500'>
			<div className='py-3 px-5 flex md:justify-between justify-center items-center w-full'>
				<div className='flex items-center gap-2'>
					<div className='w-10 h-10'>
						<img src={newUrl('logo-2.svg')} className='w-auto h-auto' />
					</div>
					<span className='font-extrabold text-3xl text-white'>PetFi</span>
				</div>
				<div className='hidden md:block'>
					<div className={`inline-flex gap-5 text-white`}>
						<Link>terms & conditions</Link>
						<Link>privacy & policies</Link>
						<Link>legal agreements</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
