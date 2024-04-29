/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { CartItem } from '../../components/card/Card';

export const cartAdapter = createEntityAdapter<CartItem>();

const initialState = cartAdapter.getInitialState({
  subtotal: 0,
  delivery: 0,
  total: 0,
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { quantity, thisCard } = action.payload;
      const { price } = thisCard;
      cartAdapter.addOne(state, action.payload);
      state.subtotal += quantity * price;
      state.delivery = Math.ceil(state.subtotal * 0.05);
      state.total = state.subtotal + state.delivery;
    },
    incrementValue: (state, action) => {
      const { id, thisCard, quantity } = action.payload;
      const { price } = thisCard;
      cartAdapter.upsertOne(state, {
        id,
        thisCard,
        quantity: quantity + 1,
        isAdded: true,
      });
      state.subtotal += price;
      state.delivery = Math.ceil(state.subtotal * 0.05);
      state.total = state.subtotal + state.delivery;
    },
    decrementValue: (state, action) => {
      const { id, thisCard, quantity } = action.payload;
      const { price } = thisCard;
      cartAdapter.upsertOne(state, {
        id,
        thisCard,
        quantity: quantity - 1,
        isAdded: true,
      });
      state.subtotal -= price;
      state.delivery = Math.ceil(state.subtotal * 0.05);
      state.total = state.subtotal + state.delivery;
    },
    changeQty: (state, action) => {
      const { id, thisCard, quantity } = action.payload;
      const { price } = thisCard;
      cartAdapter.upsertOne(state, action.payload);
      state.subtotal += (quantity - state.entities[id].quantity) * price;
      state.delivery = state.subtotal * 0.05;
      state.total = state.subtotal + state.delivery;
    },
    removeItem: (state, action) => {
      const { price } = state.entities[action.payload].thisCard;
      const { quantity } = state.entities[action.payload];
      cartAdapter.removeOne(state, action.payload);
      state.subtotal -= price * quantity;
      state.delivery = Math.ceil(state.subtotal * 0.05);
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

export const {
  addItem,
  changeQty,
  removeItem,
  incrementValue,
  decrementValue,
} = actions;

export default reducer;
