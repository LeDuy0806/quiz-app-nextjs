import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import AuthType, { InitAuth } from 'src/app/types/authType';

type InitialType = {
    authData: AuthType;
};

const initialState = {
    authData: InitAuth
} as InitialType;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthType>) => {
            localStorage.setItem('profile', JSON.stringify(action?.payload));
            state.authData = action?.payload;
        },

        logOut: (state) => {
            localStorage.clear();
            state.authData = InitAuth;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
