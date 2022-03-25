import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentBook: null,
	books: [],
};

export const addBooksSlice = createSlice({
	name: 'addBooks',
	initialState,
	reducers: {
		setCurrentBook: (state, { payload }) => {
			state.currentBook = payload;
		},
		setBooksValue: (state, { payload }) => {
			state.books[0][state.currentBook] = payload;
		},
		setBooks: (state, { payload }) => {
			state.books.push(payload);
		},
		resetBook: (state) => {
			state.books = [];
		},
	},
});

export const { setBooks, setCurrentBook, resetBook, setBooksValue } =
	addBooksSlice.actions;

export default addBooksSlice.reducer;
