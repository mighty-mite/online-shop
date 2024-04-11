/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

interface InitialState {
  category: string[];
}

const initialState: InitialState = {
  category: [],
};

export const fetchCategories = createAsyncThunk(
  'categoriesS/fetchCategories',
  (query: string) => {
    const { getCategories } = useHttp(query);
    return getCategories();
  }
);

const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

const { actions, reducer } = categoriesSlice;

export default reducer;
