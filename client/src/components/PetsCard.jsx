import propTypes from 'prop-types';

const PetsCard = ({ image, age, location, breed, id, name }) => {
	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
			<img className='rounded-t-lg cursor-pointer' src={image} alt='' />
			<div className='p-5'>
				<h5 className='mb-2 text-xl font-bold tracking-tight text-dark cursor-pointer'>
					{name}
				</h5>
				<p className='text-sm mb-2'>
					<em className='ri-map-pin-line'></em> {location}
				</p>
				<p className='text-sm mb-2 text-primary-500'>{breed} </p>
				<p className='text-sm mb-2 capitalize'>{age}</p>
				<button className='hover:bg-primary-300 border border-primary-300 text-primary-300 hover:text-white py-1.5 px-6 rounded-full mt-2'>
					Adopt
				</button>
			</div>
		</div>
	);
};

PetsCard.propTypes = {
	image: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	location: propTypes.string.isRequired,
	breed: propTypes.string.isRequired,
	age: propTypes.string.isRequired,
	id: propTypes.string.isRequired,
};

export default PetsCard;
