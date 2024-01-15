import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { server, fileUpload } from '../../utils/server';

const Dashboard = () => {
	const initialValues = {
		name: '',
		breedType: '',
		age: '',
		category: '',
		locatedIn: '',
		disability: '',
		description: '',
	};

	const [values, setValues] = useState(initialValues);

	const handleValues = async (e) => {
		setValues({
			...values,
			[e.target.id || e.target.name]: e.target.value,
		});
	};

	const setThumbnail = async (e) => {
		const thumbnail = await fileUpload(e.target.files[0]);
		setValues({ ...values, thumbnail });
	};

	const setPhotos = async (e) => {
		const photos = [];
		const uploads = e.target.files;

		for (let key in uploads) {
			const url = await fileUpload(e.target.files[key]);
			// console.log(e.target.files[key]);
			if (url) photos.push(url);
		}
		setValues({ ...values, photos });
	};

	const addNewPet = async (e) => {
		e.preventDefault();

		try {
			await server.post('admin/add-pet', values);
			setValues(initialValues);
			alert('Pet added successfully');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex w-full'>
			<Sidebar />
			<section className='bg-white dark:bg-gray-900 w-[77%] my-3.5 rounded-xl h-full'>
				<div className='py-8 px-8 mx-auto lg:pt-8'>
					<h2 className='mb-6 text-xl font-bold text-dark'>Add a new pet</h2>
					<form onSubmit={addNewPet}>
						<div className='grid gap-4 md:grid-cols-2 sm:gap-6'>
							<div className='w-full flex gap-5'>
								<div className='w-full'>
									<label
										htmlFor='name'
										className='block mb-2 text-sm font-medium text-dark dark:text-white'
									>
										Pet Name
									</label>
									<input
										type='text'
										name='name'
										id='name'
										className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='Pet name'
										value={values.name}
										onChange={handleValues}
									/>
								</div>
								<div className='w-full'>
									<label
										htmlFor='breedType'
										className='block mb-2 text-sm font-medium text-dark dark:text-white'
									>
										breed type
									</label>
									<input
										type='text'
										name='breedType'
										id='breedType'
										className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='Type of breed'
										value={values.breedType}
										onChange={handleValues}
										required
									/>
								</div>
							</div>

							<div className='w-full flex gap-5'>
								<div className='w-full'>
									<label
										htmlFor='category'
										className='block mb-2 text-sm font-medium text-dark dark:text-white'
									>
										Category
									</label>
									<select
										id='category'
										className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 capitalize'
										value={values.category}
										onChange={handleValues}
										required
									>
										<option value=''>select one</option>
										<option value='dogs'>dogs</option>
										<option value='cats'>cats</option>
										<option value='pigs'>pigs</option>
										<option value='donkeys'>donkeys</option>
										<option value='cows'>cows</option>
										<option value='rabbits'>rabbits</option>
									</select>
								</div>
								<div className='w-full'>
									<label
										htmlFor='age'
										className='block mb-2 text-sm font-medium text-dark dark:text-white'
									>
										Age
									</label>
									<input
										type='text'
										name='age'
										id='age'
										className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
										placeholder='Age of pet'
										value={values.age}
										onChange={handleValues}
									/>
								</div>
							</div>
							<div className='w-full'>
								<label
									htmlFor='locatedIn'
									className='block mb-2 text-sm font-medium text-dark dark:text-white'
								>
									Located in
								</label>
								<input
									type='text'
									name='locatedIn'
									id='locatedIn'
									className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
									placeholder='Where located'
									value={values.locatedIn}
									onChange={handleValues}
									required
								/>
							</div>

							<div className='w-full'>
								<label
									htmlFor='disability'
									className='block mb-2 text-sm font-medium text-dark dark:text-white'
								>
									Is Specially-abled
								</label>
								<input
									type='text'
									name='disability'
									id='disability'
									className='bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
									placeholder='If any disabilities'
									value={values.disability}
									onChange={handleValues}
								/>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='description'
									className='block mb-2 text-sm font-medium text-dark dark:text-white'
								>
									Description
								</label>
								<textarea
									id='description'
									rows='8'
									className='block p-2.5 w-full text-sm text-dark bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
									placeholder='Your description here'
									value={values.description}
									onChange={handleValues}
								></textarea>
							</div>
							<div className='w-full'>
								<label
									htmlFor='thumbnail'
									className='block p-2.5 w-full text-sm text-dark bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 cursor-pointer'
									placeholder='Your description here'
								>
									{values.thumbnail ? (
										<>
											<em className='ri-check-double-line me-2'></em>
											Image uploaded
										</>
									) : (
										<>
											<em className='ri-upload-2-line me-2'></em>
											Choose thumbnail
										</>
									)}
								</label>
								<input
									type='file'
									name='thumbnail'
									id='thumbnail'
									hidden
									accept='image/png, image/jpeg'
									onChange={setThumbnail}
								/>
							</div>
							<div className='w-full'>
								<label
									htmlFor='photos'
									className='block p-2.5 w-full text-sm text-dark bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 cursor-pointer'
									placeholder='Your description here'
								>
									{values.photos ? (
										<>
											<em className='ri-check-double-line me-2'></em>
											Images uploaded
										</>
									) : (
										<>
											<em className='ri-upload-2-line me-2'></em>
											Choose photos
										</>
									)}
								</label>
								<input
									type='file'
									name='photos'
									id='photos'
									hidden
									multiple
									accept='image/png, image/jpeg'
									onChange={setPhotos}
								/>
							</div>
						</div>
						<button
							type='submit'
							className='bg-primary-300 hover:bg-primary-500 text-white px-6 py-2.5 rounded-lg hidden md:block mt-6'
						>
							Add pet
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
