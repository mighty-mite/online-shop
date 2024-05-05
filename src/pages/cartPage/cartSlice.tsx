/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { CartItem } from '../../components/card/Card';

export const cartAdapter = createEntityAdapter<CartItem>();

const initialState = cartAdapter.getInitialState({
  subtotal: 0,
  delivery: 10,
  total: 0,
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { quantity, thisCard, id } = action.payload;
      const { price } = thisCard;
      cartAdapter.addOne(state, action.payload);

      const stringified = JSON.stringify(action.payload);
      if (!localStorage.getItem(id)) localStorage.setItem(id, stringified);

      state.subtotal += quantity * price;
      state.total = state.subtotal + state.delivery;
    },
    incrementValue: (state, action) => {
      const { id, thisCard, quantity } = action.payload;
      const { price } = thisCard;
      const newObj = {
        id,
        thisCard,
        quantity: quantity + 1,
        isAdded: true,
      };
      cartAdapter.upsertOne(state, newObj);
      localStorage.setItem(id, JSON.stringify(newObj));
      state.subtotal += price;
      state.total = state.subtotal + state.delivery;
    },
    decrementValue: (state, action) => {
      const { id, thisCard, quantity } = action.payload;
      const { price } = thisCard;
      const newObj = {
        id,
        thisCard,
        quantity: quantity - 1,
        isAdded: true,
      };
      cartAdapter.upsertOne(state, newObj);
      localStorage.setItem(id, JSON.stringify(newObj));
      state.subtotal -= price;
      state.total = state.subtotal + state.delivery;
    },
    removeItem: (state, action) => {
      const { price } = state.entities[action.payload].thisCard;
      const { quantity } = state.entities[action.payload];
      cartAdapter.removeOne(state, action.payload);
      localStorage.removeItem(action.payload);
      state.subtotal -= price * quantity;
      state.total = state.subtotal + state.delivery;
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

export const { addItem, removeItem, incrementValue, decrementValue } = actions;

export default reducer;
