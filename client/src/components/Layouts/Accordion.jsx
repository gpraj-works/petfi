import { Children } from 'react';
import propTypes from 'prop-types';

const Accordion = ({ children, className, onClick, isOpen }) => {
	return (
		<>
			<div
				className={`flex items-center justify-between cursor-pointer relative ${className}`}
				onClick={onClick}
			>
				{Children.map(children, (child) => {
					if (child.type === Title) {
						return child;
					}
				})}
				{isOpen ? (
					<em className='ri-subtract-line text-xl absolute right-4 text-gray-500'></em>
				) : (
					<em className='ri-add-line text-xl absolute right-4 text-gray-500'></em>
				)}
			</div>
			{isOpen && (
				<div className='mt-4'>
					{Children.map(children, (child) => {
						if (child.type === Content) {
							return child;
						}
					})}
				</div>
			)}
		</>
	);
};

const Title = ({ children, className }) => {
	return <h3 className={className}>{children}</h3>;
};

const Content = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

Accordion.propTypes = {
	children: propTypes.node.isRequired,
	className: propTypes.string,
	onClick: propTypes.func,
	isOpen: propTypes.bool,
};

Title.propTypes = {
	children: propTypes.node.isRequired,
	className: propTypes.string,
};

Content.propTypes = {
	children: propTypes.node.isRequired,
	className: propTypes.string,
};

Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
