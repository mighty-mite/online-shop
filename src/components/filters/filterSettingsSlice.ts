/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

interface InitialState {
  category: string[];
  brand: string[];
  minMaxPrice: {
    from: number;
    to: number;
  };
}

const initialState: InitialState = {
  category: [],
  brand: [],
  minMaxPrice: {
    from: 0,
    to: 1000,
  },
};

export const fetchFilterSettings = createAsyncThunk(
  'filters/fetchFilterSettings',
  () => {
    const { getAll } = useHttp();
    return getAll();
  }
);

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    categoryAdded: (state, action) => {
      state.category.push(action.payload);
    },
    categoryRemoved: (state, action) => {
      state.category = state.category.filter((item) => item !== action.payload);
    },
    brandAdded: (state, action) => {
      state.brand.push(action.payload);
    },
    brandRemoved: (state, action) => {
      state.brand = state.brand.filter((item) => item !== action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchFilterSettings.fulfilled, (state, action) => {
  //     state.category = action.payload.categories;
  //     state.brand = action.payload.brands;
  //     state.minMaxPrice.from = action.payload.minMaxPrice.from;
  //     state.minMaxPrice.to = action.payload.minMaxPrice.to;
  //   });
  // },
});

const { actions, reducer } = filterSlice;

export const { categoryAdded, categoryRemoved, brandAdded, brandRemoved } =
  actions;

export default reducer;
