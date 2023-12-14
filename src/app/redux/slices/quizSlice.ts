import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import QuizType, { InitQuiz } from 'src/app/types/quizType';

export const QuizSliceKey = 'quiz';

type InitialType = {
    quiz: QuizType;
    TeacherQuizzes: QuizType[];
    quizzes: QuizType[];
    FilteredTeacherQuizzes: QuizType[];
};

const initialState = {
    quiz: InitQuiz,
    TeacherQuizzes: [],
    quizzes: [],
    FilteredTeacherQuizzes: []
} as InitialType;

const quizSlice = createSlice({
    name: QuizSliceKey,
    initialState,
    reducers: {
        fetchQuiz: (state, action: PayloadAction<QuizType>) => {
            state.quiz = action.payload;
        },

        fetchTeacherQuizzes: (state, action: PayloadAction<QuizType[]>) => {
            state.TeacherQuizzes = action.payload;
            state.FilteredTeacherQuizzes = state.TeacherQuizzes;
        },

        filterTeacherQuizzesByName: (state, action: PayloadAction<string>) => {
            state.FilteredTeacherQuizzes = state.TeacherQuizzes.filter((quiz) => {
                return quiz?.name?.toLowerCase().includes(action.payload?.toLowerCase());
            });
        },

        fetchPublicQuizzes: (state, action: PayloadAction) => {
            state.FilteredTeacherQuizzes = state.TeacherQuizzes.filter((quiz) => quiz?.isPublic);
        },

        fetchPrivateQuizzes: (state, action: PayloadAction) => {
            state.FilteredTeacherQuizzes = state.TeacherQuizzes.filter((quiz) => !quiz?.isPublic);
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
    fetchTeacherQuizzes,
    filterTeacherQuizzesByName,
    fetchQuizzesBySearch,
    updateQuiz,
    likeQuiz,
    commentQuiz,
    deleteQuiz,
    fetchQuiz,
    setQuizPlay,
    addLibraryQuiz,
    fetchPublicQuizzes,
    fetchPrivateQuizzes
} = quizSlice.actions;

const quizReducer = quizSlice.reducer;
export default quizReducer;
