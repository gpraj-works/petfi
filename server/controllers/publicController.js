import { StatusCodes } from 'http-status-codes';
import Pet from '../models/petsModel.js';

export const allPets = async (req, res) => {
	const { category } = req.params;

	let pets = null;

	if (category === 'all-pets') {
		pets = await Pet.find();
	} else {
		pets = await Pet.find({ category });
	}

	return res.status(StatusCodes.OK).json({
		status: true,
		pets,
	});
};
