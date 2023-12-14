import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import AuthType, { InitAuth } from 'src/app/types/authType';
import UserType from 'src/app/types/userType';

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

        updateAuth: (state, action: PayloadAction<UserType>) => {
            state.authData.user = action?.payload;
            localStorage.setItem('profile', JSON.stringify(state.authData));
        },

        logOut: (state) => {
            localStorage.clear();
            state.authData = InitAuth;
        }
    }
});

export const { logIn, updateAuth, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
