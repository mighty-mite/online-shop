import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      cartAdapter.addOne(state, action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addItem } = actions;

export default reducer;
