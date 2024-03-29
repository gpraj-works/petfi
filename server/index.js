import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import dbConnect from './config/dbConfig.js';

import adminRouter from './routes/adminRouter.js';
import publicRouter from './routes/publicRouter.js';

const app = express();
const port = 3001;

await dbConnect();

app.use(cors({ origin: ['https://petfi.vercel.app'], credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/admin', adminRouter);
app.use('/api/public', publicRouter);

app.use('/', (req, res) => res.json({ message: 'Welcome to our server!' }));

app.listen(port, () => console.log('Server running..!'));

export default app;
