import FAQ from './FAQ';
import { Layout } from './Layout';

const ReachUs = () => {
	return (
		<Layout>
			<div className='flex md:flex-row flex-col gap-3'>
				<div className='md:w-7/12 md:px-6'>
					<FAQ />
				</div>
				<div className='bg-white rounded-lg md:w-5/12'>
					<div className='py-6 lg:py-12 mx-auto w-10/12'>
						<form action='#' className='space-y-8'>
							<div className='w-full'>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900'
								>
									Your email
								</label>
								<input
									type='email'
									className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
									placeholder='name@petfi.com'
									required
								/>
							</div>
							<div className='w-full'>
								<label
									htmlFor='subject'
									className='block mb-2 text-sm font-medium text-gray-900'
								>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
									placeholder='Let us know how we can help you'
									required
								/>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block mb-2 text-sm font-medium text-gray-900'
								>
									Your message
								</label>
								<textarea
									id='message'
									rows='3'
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
									placeholder='Leave a comment...'
								></textarea>
							</div>
							<button
								type='submit'
								className='bg-primary-300 hover:bg-primary-500 text-white px-6 py-2.5 rounded-full mx-2 hidden md:block'
							>
								Reach us
							</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ReachUs;
