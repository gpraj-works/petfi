import { useSelector } from 'react-redux';
import { useAllPets } from '../hooks/usePublic';
import { Layout } from './Layout';
import PetsCard from './PetsCard';

const PetsContainer = () => {
	const category = useSelector((state) => state.utils.defaultCategory);
	const { data, isLoading } = useAllPets(category);

	return (
		<Layout>
			{isLoading && <p className='text-center'>Data loading...</p>}
			{!data?.pets.length && <p className='text-center'>No data found!</p>}
			<div className='grid 3xl:grid-cols-5 xl:grid-cols-4 grid-cols-1 lg:grid-cols-3 gap-6'>
				{data?.pets?.map((item, index) => (
					<PetsCard
						key={index}
						image={item.thumbnail}
						name={item.name}
						age={item.age}
						location={item.locatedIn}
						id={item._id}
						breed={item.breedType}
					/>
				))}
			</div>
		</Layout>
	);
};

export default PetsContainer;
