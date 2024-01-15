import { Router } from 'express';
//prettier-ignore
import { addPet, currentAdmin, login, logout, } from '../controllers/adminController.js';
import { authAdmin } from '../middlewares/authMiddleware.js';

const routes = Router();

routes.post('/login', login);
routes.get('/logout', authAdmin, logout);
routes.get('/current-admin', authAdmin, currentAdmin);
routes.post('/add-pet', authAdmin, addPet);

export default routes;
