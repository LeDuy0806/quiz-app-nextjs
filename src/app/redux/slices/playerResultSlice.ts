import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PlayerResultType, { InitPlayerResult } from 'src/app/types/playerResultType';

export const PlayerResultSliceKey = 'playerResult';

type InitialType = {
    playerResult: PlayerResultType;
    playerResults: PlayerResultType[];
};
const initialState = { playerResult: InitPlayerResult, playerResults: [] } as InitialType;

const playerResultSlice = createSlice({
    name: PlayerResultSliceKey,
    initialState,
    reducers: {
        fetchPlayerResult: (state, action: PayloadAction<PlayerResultType>) => {
            state.playerResult = action.payload;
        },

        fetchPlayerResults: (state, action: PayloadAction<PlayerResultType[]>) => {
            state.playerResults = action.payload;
        },

        createPlayerResult: (state, action: PayloadAction<PlayerResultType>) => {
            state.playerResults.push(action.payload);
            state.playerResult = action.payload;
        },

        addAnswer: (state, action: PayloadAction<PlayerResultType>) => {
            state.playerResults = state.playerResults.map((playerResult) => (playerResult?._id === action.payload?._id ? action.payload : playerResult));
        }
    }
});

export const { fetchPlayerResult, createPlayerResult, fetchPlayerResults, addAnswer } = playerResultSlice.actions;

const playerResultReducer = playerResultSlice.reducer;
export default playerResultReducer;
