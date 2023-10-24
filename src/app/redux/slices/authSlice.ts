import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthType } from 'src/app/types/authType';

type InitialType = {
    authData: AuthType;
};

const initialState = {
    authData: null
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
            state.authData = null;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
