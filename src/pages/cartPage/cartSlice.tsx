/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { CartItem } from '../../components/card/Card';
import { cardsAdapter } from '../../components/cardField/cardsSlice';

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
      state.total = Number((state.subtotal + state.delivery).toFixed(2));
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
      state.subtotal = Number((state.subtotal + price).toFixed(2));
      state.total = Number((state.subtotal + state.delivery).toFixed(2));
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
      state.subtotal = Number((state.subtotal - price).toFixed(2));
      state.total = Number((state.subtotal + state.delivery).toFixed(2));
    },
    removeItem: (state, action) => {
      const { price } = state.entities[action.payload].thisCard;
      const { quantity } = state.entities[action.payload];
      cartAdapter.removeOne(state, action.payload);
      localStorage.removeItem(action.payload);
      state.subtotal = Number((state.subtotal - price * quantity).toFixed(2));
      state.total = Number((state.subtotal + state.delivery).toFixed(2));
    },
    emptyCart: (state) => {
      cardsAdapter.removeAll(state);
      state.subtotal = 0;
      state.total = 0;
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

export const {
  addItem,
  removeItem,
  incrementValue,
  decrementValue,
  emptyCart,
} = actions;

export default reducer;
