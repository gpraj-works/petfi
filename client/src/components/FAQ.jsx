import { useState } from 'react';
import Accordion from './Layouts/Accordion';
import { faqData } from '../utils/data';

const FAQ = () => {
	const [open, setOpen] = useState(0);
	const toggleAccordion = (index) => {
		if (index === open) return setOpen(false);
		setOpen(index);
	};
	return (
		<>
			{faqData.map((item, index) => (
				<Accordion
					key={index}
					isOpen={open === index}
					onClick={() => toggleAccordion(index)}
					className={`py-3 px-6 rounded-lg shadow-md border-t bg-white mb-3`}
				>
					<Accordion.Title>{item.question}</Accordion.Title>
					<Accordion.Content className='bg-white p-6 rounded-lg mb-3'>
						{item.answer}
					</Accordion.Content>
				</Accordion>
			))}
		</>
	);
};

export default FAQ;
