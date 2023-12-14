import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const LanguageSliceKey = 'language';

type InitialType = {
    language: string;
};

const initialState = {
    language: ''
} as InitialType;

const languageSlice = createSlice({
    name: LanguageSliceKey,
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            localStorage.setItem('language', JSON.stringify(action?.payload));
            state.language = action?.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

const languageReducer = languageSlice.reducer;
export default languageReducer;
