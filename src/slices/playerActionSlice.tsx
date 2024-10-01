import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, {UpdatePlayerActionsAction} from "../types/redux/playerActions";

const initialState = {
    unlockedSkills: [],
    gatherManaCount: 0,
    gatherGeneralCount: 0
};