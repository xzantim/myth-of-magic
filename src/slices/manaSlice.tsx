import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, { UpdateManaAction } from "../types/redux/mana";

const initialState: InitialState = {
  manaCount: 0,
  maxManaCount: 10,
  manaPerSecond: 0,
};

export const manaSlice = createSlice({
  name: UpdateManaAction,
  initialState: initialState,
  reducers: {
    
    autoIncrementMana: (state, action: PayloadAction<number>) => {
      if (state.manaCount < state.maxManaCount) {
        state.manaCount += (state.manaPerSecond/action.payload);
      }
      if (state.manaCount > state.maxManaCount) {
        state.manaCount = state.maxManaCount;
      }
    },
    incrementMana: (state) => {
      if ((state.manaCount + 1 ) < state.maxManaCount) {
        state.manaCount += 1;
      }
      else{
        state.manaCount = state.maxManaCount;
      }
    },
    incrementManaByAmount: (state, action: PayloadAction<number>) => {      
        state.manaCount += action.payload;
        if (state.manaCount > state.maxManaCount) {
          state.manaCount = state.maxManaCount;
        }
    },
    incrementMaxManaByAmount: (state, action: PayloadAction<number>) => {
      state.maxManaCount += action.payload;
    },
    incrementmanaPerSecondByAmount: (state, action: PayloadAction<number>) => {
      state.manaPerSecond += action.payload;
    },
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
