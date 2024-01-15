import { StatusCodes } from 'http-status-codes';
import Pet from '../models/petsModel.js';

export const allPets = async (req, res) => {
	const pets = await Pet.find();
	return res.status(StatusCodes.OK).json({
		status: true,
		pets,
	});
};
