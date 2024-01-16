import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { server } from '../../utils/server';
import { newUrl } from '../../assets';

const Login = () => {
	const navigate = useNavigate();

	const initialValues = {
		email: '',
		password: '',
	};

	const [values, setValues] = useState(initialValues);

	const handleValues = async (e) => {
		setValues({
			...values,
			[e.target.id || e.target.name]: e.target.value,
		});
	};

	const loginAccount = async (e) => {
		e.preventDefault();
		try {
			await server.post('admin/login', values);
			navigate('/admin/dashboard', { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
			<div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 md:p-12'>
					<form className='space-y-4 md:space-y-6' onSubmit={loginAccount}>
						<div className='flex items-center gap-2'>
							<div className='w-10 h-10'>
								<img src={newUrl('logo-1.svg')} className='w-auto h-auto' />
							</div>
							<span className='font-extrabold text-3xl text-primary-500'>
								PetFi
							</span>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Your email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='name@company.com'
								required
								value={values.email}
								onChange={handleValues}
							/>
						</div>
						<div>
							<label
								htmlFor='password'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Password
							</label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='••••••••'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								required
								value={values.password}
								onChange={handleValues}
							/>
						</div>

						<button
							type='submit'
							className='bg-primary-300 hover:bg-primary-500 text-white px-6 py-2.5 rounded-lg w-full hidden md:block'
						>
							Authorize
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
