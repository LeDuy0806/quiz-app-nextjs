import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';
import { QuizType, QuestionType, initialQuiz, initialQuestion } from 'src/app/types/creator';

type InitialType = {
    quiz: QuizType;
    activeQuestion: QuestionType;
    isUpdate: boolean;
};

const initialState = {
    quiz: initialQuiz,
    activeQuestion: initialQuestion,
    isUpdate: false
} as InitialType;

const quizCreatorSlice = createSlice({
    name: 'quizCreator',
    initialState,
    reducers: {}
});

export const {} = quizCreatorSlice.actions;

const quizCreatorReducer = quizCreatorSlice.reducer;
export default quizCreatorReducer;
