/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

export const goodsAdapter = createEntityAdapter();

const initialState = goodsAdapter.getInitialState({
  goodsLoadingStatus: 'idle',
});

export const fetchGoods = createAsyncThunk('goods/fetchGoods', () => {
  const { getAll } = useHttp();
  return getAll();
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.goodsLoadingStatus = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.goodsLoadingStatus = 'idle';
        goodsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchGoods.rejected, (state) => {
        state.goodsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = goodsSlice;

export default reducer;
