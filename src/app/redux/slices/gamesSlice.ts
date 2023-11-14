import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameType, { InitGame } from 'src/app/types/gameType';

type InitialType = {
    game: GameType;
    games: GameType[];
};

const initialState = {
    game: InitGame,
    games: []
} as InitialType;

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        fetchGame: (state, action: PayloadAction<GameType>) => {
            state.game = action.payload;
        },

        createGame: (state, action: PayloadAction<GameType>) => {
            state.games.push(action.payload);
            state.game = action.payload;
        },

        addPlayer: (state, action: PayloadAction<GameType>) => {
            state.games = state.games.map((game) => (game?._id === action.payload?._id ? action.payload : game));
        }
    }
});

export const { createGame, fetchGame, addPlayer } = gameSlice.actions;

const gameReducer = gameSlice.reducer;
export default gameReducer;
