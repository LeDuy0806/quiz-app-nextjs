import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CategoryType from 'src/app/types/categoryType';
import GradeType from 'src/app/types/gradeType';
import QuizType, { InitQuiz } from 'src/app/types/quizType';

export const QuizSliceKey = 'quiz';

type InitialType = {
    quiz: QuizType;
    TeacherQuizzes: QuizType[];
    quizzes: QuizType[];
    FilteredTeacherQuizzes: QuizType[];
    categories: CategoryType[];
    grades: GradeType[];
};

const initialState = {
    quiz: InitQuiz,
    TeacherQuizzes: [],
    quizzes: [],
    FilteredTeacherQuizzes: [],
    categories: [],
    grades: []
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
            // state.TeacherQuizzes = state.TeacherQuizzes.filter((quiz) => {
            //     return quiz?._id !== action.payload?._id;
            // });
            // state.FilteredTeacherQuizzes = state.FilteredTeacherQuizzes.filter((quiz) => {
            //     return quiz?._id !== action.payload?._id;
            // });
        },

        setCategories: (state, action: PayloadAction<CategoryType[]>) => {
            state.categories = action.payload;
        },

        setGrades: (state, action: PayloadAction<GradeType[]>) => {
            state.grades = action.payload;
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
    fetchPrivateQuizzes,
    setCategories,
    setGrades
} = quizSlice.actions;

const quizReducer = quizSlice.reducer;
export default quizReducer;
