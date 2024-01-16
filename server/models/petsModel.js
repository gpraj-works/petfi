import mongoose from 'mongoose';

const PetsSchema = new mongoose.Schema(
	{
		name: String,
		breedType: String,
		locatedIn: {
			type: String,
			require: true,
		},
		age: String,
		category: {
			type: String,
			require: true,
		},
		disability: String,
		description: {
			type: String,
			require: true,
		},
		thumbnail: {
			type: String,
			require: true,
		},
		photos: {
			type: Array,
			require: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Pets', PetsSchema);
