import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	defaultCategory: 'all-pets',
	admin: false,
};

const utilsSlice = createSlice({
	name: 'utils',
	initialState,
	reducers: {
		changeCategory: (state, action) => {
			state.defaultCategory = action.payload;
		},

		updateAdmin: (state, action) => {
			state.admin = action.payload;
		},
	},
});

export const { changeCategory, updateAdmin } = utilsSlice.actions;
export default utilsSlice.reducer;
