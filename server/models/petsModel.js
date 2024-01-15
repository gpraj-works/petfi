import mongoose from 'mongoose';

const PetsSchema = new mongoose.Schema(
	{
		name: String,
		breedType: String,
		locatedIn: String,
		age: String,
		category: String,
		disability: String,
		description: String,
		thumbnail: String,
		photos: Array,
	},
	{ timestamps: true }
);

export default mongoose.model('Pets', PetsSchema);
