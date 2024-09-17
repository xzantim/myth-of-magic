import { configureStore } from "@reduxjs/toolkit";
import manaReducer from "../slices/manaSlice";
import goldReducer from "../slices/goldSlice";

const store = configureStore({
  reducer: {
    mana: manaReducer,
    gold: goldReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
