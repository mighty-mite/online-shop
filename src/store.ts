import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import cards from './components/cardField/cardsSlice';
import categories from './components/category/categorySlice';
import brands from './components/brand/brandSlice';
import filters from './components/filters/filterSettingsSlice';
import cart from './pages/cartPage/cartSlice';

export const store = configureStore({
  reducer: { cards, categories, brands, filters, cart },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const { selectById } = cartAdapter.getSelectors<RootState>(
//   (state) => state.cards
// );
