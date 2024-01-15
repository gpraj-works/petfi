import mongoose from 'mongoose';

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log('Database connected!');
	} catch (error) {
		console.log('database connection failed : ' + error);
	}
};

export default dbConnect;
