import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import QuizType from 'src/app/types/quizType';

type SearchSliceType = {
    searchName: string;
    searchTags: string;
    quizzes: QuizType[];
};

const initialState: SearchSliceType = {
    searchName: '',
    searchTags: '',
    quizzes: []
};

export const SearchSliceKey = 'search';

const searchSlice = createSlice({
    name: SearchSliceKey,
    initialState,
    reducers: {
        setSearchName: (state, action: PayloadAction<string>) => {
            state.searchName = action.payload;
        },
        setSeacrchTags: (state, action: PayloadAction<string>) => {
            state.searchTags = action.payload;
        },
        setResultQuizzes: (state, action: PayloadAction<QuizType[]>) => {
            state.quizzes = action.payload;
        }
    }
});

export const { setSeacrchTags, setSearchName } = searchSlice.actions;

const searchReducer = searchSlice.reducer;
export default searchReducer;
