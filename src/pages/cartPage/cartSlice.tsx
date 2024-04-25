import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { CartItem } from '../../components/card/Card';

export const cartAdapter = createEntityAdapter<CartItem>();

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

export const selectQtyById = (state: RootState, itemId: number) => {
  const item = state.cart.entities[itemId];
  return item ? item.quantity : 1;
};

export const selectItemInCartById = (state: RootState, itemId: number) => {
  const item = state.cart.entities[itemId];
  return item;
};

export const selectIsAddedById = (state: RootState, itemId: number) => {
  const item = state.cart.entities[itemId];
  return item ? item.isAdded : false;
};

const { actions, reducer } = cartSlice;

export const { addItem, changeQty, removeItem } = actions;

export default reducer;
