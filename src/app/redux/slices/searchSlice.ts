import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: ''
};

export const SearchSliceKey = 'search';

const searchSlice = createSlice({
    name: SearchSliceKey,
    initialState,
    reducers: {
        searchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { searchQuery } = searchSlice.actions;

const searchReducer = searchSlice.reducer;
export default searchReducer;
