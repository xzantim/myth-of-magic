import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import goldInitialState, { UpdateGoldAction } from "../types/redux/gold";

const initialState: goldInitialState = {
  goldCount: 0,
  maxGoldCount: 100,
  goldPerSecond: 0,
};

export const goldSlice = createSlice({
  name: UpdateGoldAction,
  initialState: initialState,
  reducers: {
    autoIncrementGold: (state, action: PayloadAction<number>) => {
      if (state.goldCount < state.maxGoldCount) {
        state.goldCount += state.goldPerSecond / action.payload;
      }
      if (state.goldCount > state.maxGoldCount) {
        state.goldCount = state.maxGoldCount;
      }
    },
    incrementGold: (state) => {
      if (state.goldCount + 1 < state.maxGoldCount) {
        state.goldCount += 1;
      } else {
        state.goldCount = state.maxGoldCount;
      }
    },
    incrementGoldByAmount: (state, action: PayloadAction<number>) => {
      state.goldCount += action.payload;
      if (state.goldCount > state.maxGoldCount) {
        state.goldCount = state.maxGoldCount;
      }
    },
    incrementMaxGoldByAmount: (state, action: PayloadAction<number>) => {
      state.maxGoldCount += action.payload;
    },
    incrementGoldPerSecondByAmount: (state, action: PayloadAction<number>) => {
      state.goldPerSecond += action.payload;
    },
  },
});

export const {
  incrementGold,
  incrementGoldByAmount,
  incrementMaxGoldByAmount,
  incrementGoldPerSecondByAmount,
  autoIncrementGold,
} = goldSlice.actions;

export default goldSlice.reducer;
