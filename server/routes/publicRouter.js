import { Router } from 'express';
import { allPets } from '../controllers/publicController.js';

const routes = Router();

routes.get('/all-pets', allPets);

export default routes;
