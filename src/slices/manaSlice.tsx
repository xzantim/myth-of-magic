import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, { UpdateManaAction } from "../types/redux/mana";

const initialState: InitialState = {
  manaCount: 0,
  maxManaCount: 10,
  manaPerSecond: 1,
};

export const manaSlice = createSlice({
  name: UpdateManaAction,
  initialState: initialState,
  reducers: {
    incrementMana: (state) => {
      if ((state.manaCount + 1 ) < state.maxManaCount) {
        state.manaCount += 1;
      }
      else{
        state.manaCount = state.maxManaCount;
      }
    },
    incrementManaByAmount: (state, action: PayloadAction<number>) => {
      if ((state.manaCount += action.payload) < state.maxManaCount) {
        state.manaCount += action.payload;
      }
      else{
        state.manaCount = state.maxManaCount;
      }
    },
    incrementMaxManaByAmount: (state, action: PayloadAction<number>) => {
      state.maxManaCount += action.payload;
    },
    incrementmanaPerSecondByAmount: (state, action: PayloadAction<number>) => {
      state.manaPerSecond += action.payload;
    },
    autoIncrementMana: (state) => {
      if (state.manaCount < state.maxManaCount) {
        state.manaCount += state.manaPerSecond;
      }
    }
  },
});

export const {
  incrementMana,
  incrementManaByAmount,
  incrementMaxManaByAmount,
  incrementmanaPerSecondByAmount,
  autoIncrementMana,
} = manaSlice.actions;

export default manaSlice.reducer;
