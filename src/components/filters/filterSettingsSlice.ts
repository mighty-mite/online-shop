/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

interface InitialState {
  category: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
  search: string;
}

const initialState: InitialState = {
  category: [],
  brand: [],
  minPrice: 10,
  maxPrice: 2000,
  search: '',
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

    minPriceChange: (state, action) => {
      state.minPrice = action.payload;
    },
    maxPriceChange: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchFilterSettings.fulfilled, (state, action) => {
  // state.category = action.payload.categories;
  // state.brand = action.payload.brands;
  // state.prices.from = action.payload.prices.from;
  // state.prices.to = action.payload.prices.to;
  //   });
  // },
});

const { actions, reducer } = filterSlice;

export const {
  categoryAdded,
  categoryRemoved,
  brandAdded,
  brandRemoved,

  maxPriceChange,
  minPriceChange,

  setSearch,
} = actions;

export default reducer;
