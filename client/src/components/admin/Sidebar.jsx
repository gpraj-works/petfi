import { Link, useNavigate } from 'react-router-dom';
import { server } from '../../utils/server';
import { newUrl } from '../../assets';

const Sidebar = () => {
	const navigate = useNavigate();

	const logout = async () => {
		try {
			await server.get('admin/logout');
			navigate('/admin');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='sticky top-0 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[97vh] w-[20%] p-4 shadow-xl m-3'>
			<div className='flex items-center gap-2'>
				<div className='w-10 h-10'>
					<img src={newUrl('logo-1.svg')} className='w-auto h-auto' />
				</div>
				<span className='font-extrabold text-3xl text-primary-500'>PetFi</span>
			</div>
			<nav className='flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700 py-5'>
				<Link
					to='/admin/dashboard'
					className='inline-flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg'
				>
					<div className='grid place-items-center mr-4'>
						<span className='ri-edit-line'></span>
					</div>
					Add pets
				</Link>
				<Link
					to='/admin/manage-pets'
					className='inline-flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg'
				>
					<div className='grid place-items-center mr-4'>
						<span className='ri-bar-chart-horizontal-line'></span>
					</div>
					Manage pets
				</Link>
				<button
					onClick={logout}
					className='inline-flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg outline-none'
				>
					<div className='grid place-items-center mr-4'>
						<span className='ri-logout-circle-line'></span>
					</div>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Sidebar;
