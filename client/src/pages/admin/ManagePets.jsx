import Sidebar from '../../components/admin/Sidebar';
import { useAllPets } from '../../hooks/useAdmin';
import moment from 'moment';

const ManagePets = () => {
	const { data } = useAllPets();

	return (
		<div className='flex w-full'>
			<Sidebar />
			<section className='bg-white dark:bg-gray-900 w-[77%] my-3.5 rounded-xl h-full'>
				<div className='py-8 mx-auto lg:pt-8'>
					<div className='flex flex-col'>
						<div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
							<div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
								<div className='overflow-hidden'>
									<table className='min-w-full'>
										<thead className='bg-gray-100 border-b'>
											<tr>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-3 py-4 text-left'
												>
													Sno
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Name
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Breed
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Category
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Location
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Updated at
												</th>
												<th
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													Action
												</th>
											</tr>
										</thead>
										<tbody>
											{data?.pets.map((item, index) => (
												<tr
													className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'
													key={index}
												>
													<td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
														{index + 1}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
														{item.name}
													</td>
													<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
														{item.breedType}
													</td>
													<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
														{item.category}
													</td>
													<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
														{item.locatedIn}
													</td>
													<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
														{moment(item.updatedAt).format(
															'DD-MM-YYYY hh:MM A'
														)}
													</td>
													<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap inline-flex gap-3'>
														<span className='ri-edit-line cursor-pointer text-primary-500'></span>
														<span className='ri-delete-bin-line cursor-pointer text-red-500'></span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ManagePets;
