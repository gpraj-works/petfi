import swr from 'swr';
import { fetcher } from '../utils/server';

export const useAllPets = (category) => {
	return swr(`public/all-pets/${category}`, fetcher);
};
