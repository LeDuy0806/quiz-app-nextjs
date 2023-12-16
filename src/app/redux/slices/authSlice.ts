import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import AuthType, { InitAuth } from 'src/app/types/authType';
import UserType from 'src/app/types/userType';
import { apiAuth } from '../services/authApi';

export const AuthSliceKey = 'auth';

type InitialType = {
    authData: AuthType;
};

const initialState = {
    authData: InitAuth
} as InitialType;

const authSlice = createSlice({
    name: AuthSliceKey,
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthType>) => {
            // localStorage.setItem('profile', JSON.stringify(action?.payload));
            state.authData = action?.payload;
        },

        updateAuth: (state, action: PayloadAction<UserType>) => {
            state.authData.user = action?.payload;
            // localStorage.setItem('profile', JSON.stringify(state.authData));
        },

        logOut: (state) => {
            state.authData = InitAuth;
            localStorage.removeItem('profile');
            localStorage.removeItem('persist:root');
            localStorage.clear();
        }
    }
    // extraReducers: (builder) => {
    //     builder.addMatcher(apiAuth.endpoints.userLogOut.matchFulfilled, (state, action) => {
    //         localStorage.clear();
    //     });
    // }
});

export const { logIn, updateAuth, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
