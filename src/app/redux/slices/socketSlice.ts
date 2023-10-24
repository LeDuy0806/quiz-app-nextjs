import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Socket } from 'socket.io-client';

type InitialType = {
    socket: any;
};

const initialState = {
    socket: null
} as InitialType;

const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        createSocket: (state, action: PayloadAction<Socket>) => {
            state.socket = action.payload;
        },
        deleteSocket: (state) => {
            state.socket = null;
        }
    }
});

export const { createSocket, deleteSocket } = socketSlice.actions;

const socketReducer = socketSlice.reducer;
export default socketReducer;
