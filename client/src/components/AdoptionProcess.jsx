const AdoptionProcess = () => {
	return (
		<div className='bg-primary-500'>
			<ol className='items-center sm:flex md:px-20 md:py-12 px-5 py-10'>
				<li className='relative mb-6 sm:mb-0 text-white'>
					<div className='flex items-center'>
						<div className='flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full ring-4 shrink-0 ring-white'>
							1
						</div>
						<div className='hidden sm:flex w-full bg-white h-0.5'></div>
					</div>
					<div className='mt-3 sm:pe-8'>
						<h3 className='text-lg my-1'>Choose A Pet</h3>
						<p className='text-gray-100'>
							Explore our gallery of adorable pets, each with a unique story.
							Find your perfect match that tugs at your heartstrings
						</p>
					</div>
				</li>
				<li className='relative mb-6 sm:mb-0 text-white'>
					<div className='flex items-center'>
						<div className='flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full ring-4 shrink-0 ring-white'>
							2
						</div>
						<div className='hidden sm:flex w-full bg-white h-0.5'></div>
					</div>
					<div className='mt-3 sm:pe-8'>
						<h3 className='text-lg my-1'>Share your information</h3>
						<p className='text-gray-100'>
							Complete a simple adoption application to share your love,
							commitment, and readiness to welcome a new furry friend into your
							home.
						</p>
					</div>
				</li>
				<li className='relative mb-6 sm:mb-0 text-white'>
					<div className='flex items-center'>
						<div className='flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full ring-4 shrink-0 ring-white'>
							3
						</div>
						<div className='hidden sm:flex w-full bg-white h-0.5'></div>
					</div>
					<div className='mt-3 sm:pe-8'>
						<h3 className='text-lg my-1'>Get delivery</h3>
						<p className='text-gray-100'>
							Once approved, your chosen pet will be delivered to your doorstep,
							ready to fill your life with joy and companionship.
						</p>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default AdoptionProcess;
