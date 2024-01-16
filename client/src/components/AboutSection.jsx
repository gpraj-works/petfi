import { useState } from 'react';
import { Layout } from './Layout';
import { isMobile } from 'react-device-detect';
import { newUrl } from '../assets';

const AboutSection = () => {
	const [moreDetail, setMoreDetail] = useState(false);

	return (
		<Layout>
			<div className='flex justify-between items-center md:gap-3 gap-6 md:flex-row flex-col'>
				<div className='md:w-6/12 flex gap-3'>
					<div className='mb-6'>
						<img
							src={newUrl('about-2.jpg')}
							className='w-full h-full rounded-lg'
						/>
					</div>
					<div className='mt-6'>
						<img
							src={newUrl('about-1.jpg')}
							className='w-full h-full rounded-lg'
						/>
					</div>
				</div>
				<div className='md:w-6/12 md:px-6 inline-flex flex-col gap-4'>
					<h2
						className='md:text-4xl text-2xl font-bold text-dark capitalize'
						style={{ lineHeight: 1.4 }}
					>
						Building a Community Where No One is Alone
					</h2>
					<p className=' font-medium tracking-wide leading-relaxed text-lg md:text-left text-justify'>
						&emsp;&emsp;&emsp;
						<em>
							&ldquo;Our vision is rooted in the belief that no one should be
							alone in this world&rdquo; , and we strive to create a community
							where we care for each other, extending our love and concern to
							both humans and animals alike.
						</em>
						{isMobile && (
							<button
								className='ms-3 text-sm bg-gray-200 px-3 rounded-full py-0.5'
								onClick={() => setMoreDetail(!moreDetail)}
							>
								Show more
							</button>
						)}
					</p>

					<p
						className={`font-medium tracking-wide leading-relaxed md:text-left text-justify ${
							moreDetail ? 'block' : 'hidden'
						} md:block`}
					>
						&emsp;&emsp;&emsp;At our organization, we extend compassion to pets
						left alone on our streets, providing them with the love and care
						they deserve. We actively work towards finding loving homes for pets
						in need through adoption. Additionally, we offer comprehensive
						training to ensure that adopted pets receive the best possible care.
						To further support their well-being, we provide free veterinarian
						checkups every three months.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutSection;
