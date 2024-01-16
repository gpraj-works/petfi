import swr from 'swr';
import { fetcher } from '../utils/server';

export const useGetAdmin = () => {
	return swr('admin/current-admin', fetcher);
};

export const useAllPets = () => {
	return swr('admin/all-pets', fetcher);
};
