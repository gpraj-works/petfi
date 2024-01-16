import { Router } from 'express';
//prettier-ignore
import { addPet, currentAdmin, login, logout, getAllPets } from '../controllers/adminController.js';
import { authAdmin } from '../middlewares/authMiddleware.js';

const routes = Router();

routes.post('/login', login);
routes.get('/logout', authAdmin, logout);
routes.get('/current-admin', authAdmin, currentAdmin);
routes.post('/add-pet', authAdmin, addPet);
routes.get('/all-pets', authAdmin, getAllPets);

export default routes;
