/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

interface InitialState {
  brand: string[];
}

const initialState: InitialState = {
  brand: [],
};

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const { getAll } = useHttp();
  return (await getAll()).brands;
});

const brandSlice = createSlice({
  name: 'brandSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brand = action.payload;
    });
  },
});

const { actions, reducer } = brandSlice;

export default reducer;
