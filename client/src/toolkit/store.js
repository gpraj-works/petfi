import { configureStore } from '@reduxjs/toolkit';
import utilsSlice from './slices/utilsSlice';

const store = configureStore({
	reducer: {
		utils: utilsSlice,
	},
});

export default store;
