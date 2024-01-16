import { changeCategory } from '../toolkit/slices/utilsSlice';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

const Categories = () => {
	const dispatch = useDispatch();
	const active = useSelector((state) => state.utils.defaultCategory);

	const Button = ({ title, state }) => {
		const activeStyle =
			active === state
				? 'bg-primary-300 text-white border-primary-500'
				: 'border-primary-500 text-primary-500 md:text-dark ';
		return (
			<button
				className={`${activeStyle}hover:bg-primary-500 hover:text-white py-2 px-6 rounded-full duration-150 delay-50 md:border-none border`}
				onClick={() => dispatch(changeCategory(state))}
			>
				{title}
			</button>
		);
	};

	Button.propTypes = {
		title: propTypes.string.isRequired,
		state: propTypes.string.isRequired,
	};

	return (
		<div className='flex justify-center mt-4'>
			<div className='inline-flex md:flex-row flex-wrap md:flex-nowrap md:justify-evenly md:gap-0 gap-3 items-center md:w-8/12 md:bg-white md:shadow-md p-2 rounded-full'>
				<Button title='Cats' state='cats' />
				<Button title='Dogs' state='dogs' />
				<Button title='Rabbits' state='rabbits' />
				<Button title='All pets' state='all-pets' />
				<Button title='Pigs' state='pigs' />
				<Button title='Donkeys' state='donkeys' />
				<Button title='Cows' state='cows' />
			</div>
		</div>
	);
};

export default Categories;
