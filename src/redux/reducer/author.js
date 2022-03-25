import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalAuthor: null,
	author: [],
	authorPhoto: [],
};

export const addAuthorSlice = createSlice({
	name: 'addAuthor',
	initialState,
	reducers: {
		setTotalData: (state, { payload }) => {
			state.totalAuthor = payload;
		},
		addAuthorName: (state, { payload }) => {
			state.author.push(payload);
		},
		addAuthorPhoto: (state, { payload }) => {
			state.authorPhoto.push(payload);
		},
	},
});

export const { addAuthorName, addAuthorPhoto, setTotalData } =
	addAuthorSlice.actions;

export default addAuthorSlice.reducer;
