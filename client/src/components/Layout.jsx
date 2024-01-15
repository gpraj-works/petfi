import propTypes from 'prop-types';

export const Layout = ({ children }) => {
	return <div className='md:px-20 md:py-12 px-5 py-10'>{children}</div>;
};

Layout.propTypes = {
	children: propTypes.node.isRequired,
};
