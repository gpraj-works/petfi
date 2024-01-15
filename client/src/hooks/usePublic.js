import swr from 'swr';
import { fetcher } from '../utils/server';

export const useAllPets = () => {
	return swr('public/all-pets', fetcher);
};
