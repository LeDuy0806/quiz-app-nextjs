import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LeaderBoardType, { InitLeaderBoard } from 'src/app/types/leaderboardType';

export const LeaderBoardSliceKey = 'leaderBoard';

type InitialType = {
    leaderBoard: LeaderBoardType;
    leaderBoards: LeaderBoardType[];
};

const initialState = {
    leaderBoard: InitLeaderBoard,
    leaderBoards: []
} as InitialType;

const leaderBoardSlice = createSlice({
    name: LeaderBoardSliceKey,
    initialState,
    reducers: {
        fetchLeaderBoard: (state, action: PayloadAction<LeaderBoardType>) => {
            state.leaderBoard = action.payload;
        },

        createLeaderBoard: (state, action: PayloadAction<LeaderBoardType>) => {
            state.leaderBoards.push(action.payload);
            state.leaderBoard = action.payload;
        },

        addPlayerResult: (state, action: PayloadAction<LeaderBoardType>) => {
            state.leaderBoards = state.leaderBoards.map((leaderBoard) => (leaderBoard?._id === action.payload?._id ? action.payload : leaderBoard));
        },

        updateQuestionLeaderBoard: (state, action: PayloadAction<LeaderBoardType>) => {
            state.leaderBoards = state.leaderBoards.map((leaderBoard) => (leaderBoard?._id === action.payload?._id ? action.payload : leaderBoard));
        },

        updateCurrentLeaderBoard: (state, action: PayloadAction<LeaderBoardType>) => {
            state.leaderBoards = state.leaderBoards.map((leaderBoard) => (leaderBoard?._id === action.payload?._id ? action.payload : leaderBoard));
        }
    }
});

export const { createLeaderBoard, fetchLeaderBoard, addPlayerResult, updateQuestionLeaderBoard, updateCurrentLeaderBoard } = leaderBoardSlice.actions;

const leaderBoardReducer = leaderBoardSlice.reducer;
export default leaderBoardReducer;
