/* eslint-disable no-param-reassign */
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import useHttp from '../../hooks/useHttp';

export const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState({
  cardsLoadingStatus: 'idle',
  offset: 10,
  filteredCards: [],
});

export const fetchCards = createAsyncThunk('cards/fetchCards', () => {
  const { getAll } = useHttp();
  return getAll();
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setOffset: (state) => {
      state.offset += 10;
    },
    setFilteredCards: (state, action) => {
      state.filteredCards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.cardsLoadingStatus = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cardsLoadingStatus = 'idle';
        cardsAdapter.addMany(state, action.payload.data);
      })
      .addCase(fetchCards.rejected, (state) => {
        state.cardsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

export const { selectAll, selectById } = cardsAdapter.getSelectors<RootState>(
  (state) => state.cards
);

const { actions, reducer } = cardsSlice;

export const { setOffset, setFilteredCards } = actions;

export default reducer;
