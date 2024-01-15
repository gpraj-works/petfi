import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
	{
		email: String,
		password: String,
	},
	{ timestamps: true }
);

export default mongoose.model('Admins', AdminSchema);
