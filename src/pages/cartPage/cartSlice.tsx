import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      cartAdapter.addOne(state, action.payload);
    },
    changeQty: (state, action) => {
      cartAdapter.upsertOne(state, action.payload);
    },
    removeItem: (state, action) => {
      cartAdapter.removeOne(state, action.payload);
    },
  },
});

export const { selectAll, selectById } = cartAdapter.getSelectors<RootState>(
  (state) => state.cart
);

const { actions, reducer } = cartSlice;

export const { addItem, changeQty, removeItem } = actions;

export default reducer;
