import React from "react";
import "./App.css";
import GameWindow from "./components/GameWindow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { autoIncrementMana } from "./slices/manaSlice";

function App() {
  const dispatch = useDispatch();

  setInterval(function updateMyGame() {
    dispatch(autoIncrementMana());
  }, 1000);

  return <GameWindow />;
}

export default App;
