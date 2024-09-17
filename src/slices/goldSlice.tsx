import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import goldInitialState, { UpdateGoldAction } from "../types/redux/gold";

const initialState: goldInitialState = {
  goldCount: 0,
  maxGoldCount: 100,
};

export const goldSlice = createSlice({
  name: UpdateGoldAction,
  initialState: initialState,
  reducers: {
    incrementGold: (state) => {
      if (state.goldCount < state.maxGoldCount) {
        state.goldCount += 1;
      }
    },
    incrementGoldByAmount: (state, action: PayloadAction<number>) => {
      state.goldCount += action.payload;
      if ((state.goldCount += action.payload) < state.maxGoldCount) {
        state.goldCount += action.payload;
      }
    },
    incrementMaxGoldByAmount: (state, action: PayloadAction<number>) => {
      state.maxGoldCount += action.payload;
    },
  },
});

export const {
  incrementGold,
  incrementGoldByAmount,
  incrementMaxGoldByAmount,
} = goldSlice.actions;

export default goldSlice.reducer;
