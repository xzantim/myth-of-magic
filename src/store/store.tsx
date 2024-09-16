import { configureStore } from "@reduxjs/toolkit";
import manaReducer from "../slices/manaSlice"

const store = configureStore({
  reducer: {
    mana: manaReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;