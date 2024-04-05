import { configureStore } from '@reduxjs/toolkit';
import goods, { goodsAdapter } from './pages/shopPage/goodsSlice';

export const store = configureStore({
  reducer: { goods },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const { selectAll } = goodsAdapter.getSelectors<RootState>(
  (state) => state.goods
);
