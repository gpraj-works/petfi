const Loading = () => {
	return (
		<div className='w-screen h-screen flex justify-center items-center gap-2 text-primary-500'>
			<span className='ri-donut-chart-line text-xl animate-spin'></span>
			<span>Processing...</span>
		</div>
	);
};

export default Loading;
