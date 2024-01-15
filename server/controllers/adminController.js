import Admin from '../models/adminModel.js';
import Pet from '../models/petsModel.js';
import { StatusCodes } from 'http-status-codes';
import { compareString, createToken } from '../utils/tokenUtils.js';

export const login = async (req, res) => {
	const { email, password } = req.body;
	const admin = await Admin.findOne({ email });

	if (!admin) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			status: false,
			message: 'Account not found!',
		});
	}

	const isCorrect = await compareString(password, admin.password);

	if (!isCorrect) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			status: false,
			message: 'Password not match!',
		});
	}

	const token = createToken(admin);

	res.cookie('petfi', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'none',
		expires: new Date(Date.now() + 1000 * 60 * 60 * 6),
	});

	return res.status(StatusCodes.OK).json({
		status: true,
		message: 'Logged in successfully!',
	});
};

export const logout = async (req, res) => {
	res.cookie('petfi', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now()),
	});

	return res.status(StatusCodes.OK).json({
		status: true,
		message: 'Logged out successfully',
	});
};

export const currentAdmin = async (req, res) => {
	const { email, _id } = await Admin.findOne({ _id: req.admin.id });
	return res.status(StatusCodes.OK).json({
		status: true,
		admin: { email, _id },
	});
};

export const addPet = async (req, res) => {
	await Pet.create(req.body);
	return res.status(StatusCodes.OK).json({
		status: true,
		message: 'Pet added successfully',
	});
};
