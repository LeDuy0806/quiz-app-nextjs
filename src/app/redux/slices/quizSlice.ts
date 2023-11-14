import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import QuizType, { InitQuiz } from 'src/app/types/quizType';

type InitialType = {
    quiz: QuizType;
    quizzes: QuizType[];
};

const initialState = {
    quiz: InitQuiz,
    quizzes: []
} as InitialType;

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        fetchQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quiz = action.payload;
        },

        fetchTeacherQuizzes: (state, action: PayloadAction<QuizType[]>) => {
            state.quizzes = action.payload;
        },

        fetchPublicQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        setQuizPlay: (state, action: PayloadAction<QuizType>) => {
            state.quiz = action.payload;
        },

        fetchQuizzesBySearch: (state, action: PayloadAction<QuizType[]>) => {
            state.quizzes = action.payload;
        },

        addLibraryQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quizzes.push(action.payload);
        },

        updateQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quizzes = state.quizzes.map((quiz) => {
                return quiz?._id === action.payload?._id ? action.payload : quiz;
            });
        },

        likeQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quizzes = state.quizzes.map((quiz) => {
                return quiz?._id === action.payload?._id ? action.payload : quiz;
            });
        },

        commentQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quizzes = state.quizzes.map((quiz) => {
                return quiz?._id === action.payload?._id ? action.payload : quiz;
            });
        },

        deleteQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quizzes = state.quizzes.filter((quiz) => {
                return quiz?._id !== action.payload?._id;
            });
        }
    }
});

export const {
    fetchPublicQuizzes,
    fetchTeacherQuizzes,
    fetchQuizzesBySearch,
    updateQuiz,
    likeQuiz,
    commentQuiz,
    deleteQuiz,
    fetchQuiz,
    setQuizPlay,
    addLibraryQuiz
} = quizSlice.actions;

const quizReducer = quizSlice.reducer;
export default quizReducer;
