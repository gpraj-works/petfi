import { StatusCodes } from 'http-status-codes';
import { validateToken } from '../utils/tokenUtils.js';

export const authAdmin = async (req, res, next) => {
	const { petfi } = req.cookies;

	if (!petfi) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			status: false,
			message: 'Invalid token. Login again!',
		});
	}

	try {
		const { user } = validateToken(petfi);
		req.admin = { id: user._id, email: user._id };
		next();
	} catch (error) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			status: false,
			message: 'Invalid token. Login again!',
		});
	}
};
