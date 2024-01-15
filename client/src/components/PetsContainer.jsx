import { useAllPets } from '../hooks/usePublic';
import { Layout } from './Layout';
import PetsCard from './PetsCard';

const PetsContainer = () => {
	const { data, isLoading, mutate } = useAllPets();

	return (
		<Layout>
			<div className='grid 3xl:grid-cols-5 xl:grid-cols-4 grid-cols-1 lg:grid-cols-3 gap-6'>
				{isLoading && <p className='text-center'>Data loading...</p>}
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
