import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	textFrom: [],
	priceBefore: [],
	textAfter: [],
	priceAfter: [],
};

export const changeDataSlice = createSlice({
	name: 'changeData',
	initialState,
	reducers: {
		setBeforeChangedText: (state, { payload }) => {
			state.textFrom.push(payload);
		},
		setAfterChangedText: (state, { payload }) => {
			state.textAfter.push(payload);
		},
		setBeforePrice: (state, { payload }) => {
			state.priceBefore.push(payload);
		},
		setAfterPrice: (state, { payload }) => {
			state.priceAfter.push(payload);
		},
	},
});

export const {
	setBeforeChangedText,
	setAfterChangedText,
	setBeforePrice,
	setAfterPrice,
} = changeDataSlice.actions;

export default changeDataSlice.reducer;
