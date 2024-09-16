import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, { UpdateManaAction } from "../types/redux/mana";

const initialState: InitialState = {
  manaCount: 0,
  maxManaCount: 10,
};

export const manaSlice = createSlice({
  name: UpdateManaAction,
  initialState: initialState,
  reducers: {
    incrementMana: (state) => {
      if (state.manaCount < state.maxManaCount) {
        state.manaCount += 1;
      }
    },
    incrementManaByAmount: (state, action: PayloadAction<number>) => {
      state.manaCount += action.payload;
      if ((state.manaCount += action.payload) < state.maxManaCount) {
        state.manaCount += action.payload;
      }
    },
    incrementMaxManaByAmount: (state, action: PayloadAction<number>) => {
      state.maxManaCount += action.payload;
    },
  },
});

export const { incrementMana, incrementManaByAmount, incrementMaxManaByAmount } = manaSlice.actions;

export default manaSlice.reducer;
