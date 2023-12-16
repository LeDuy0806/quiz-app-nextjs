import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { QuizType, QuestionType, initialQuiz, initialQuestion, AnswerType } from 'src/app/types/creator';
import { AnswerNameEnum, OptionQuestionEnum, PointTypeEnum, QuestionTypeEnum } from 'src/constants/enum';
import { CreatorMessages } from 'src/constants/messages';
import { ToastOptions } from 'src/constants/toast';

export const QuizCreatorSliceKey = 'quizCreator';

type CreatorStateType = {
    quiz: QuizType;
    activeQuestion: QuestionType;
    deleteQuestionIndex: number | null;
    openDeleteQuestionDialog: boolean;
    isUpdate: boolean;
};

const initialState = {
    quiz: initialQuiz,
    activeQuestion: initialQuestion,
    deleteQuestionIndex: null,
    openDeleteQuestionDialog: false,
    isUpdate: false
} as CreatorStateType;

const quizCreatorSlice = createSlice({
    name: QuizCreatorSliceKey,
    initialState,
    reducers: {
        updateQuizInfo: (state, action: PayloadAction<QuizType>) => {
            state.quiz = action.payload;
        },

        setQuizFromParams: (state, action: PayloadAction<QuizType>) => {
            state.quiz = action.payload;
            state.activeQuestion = state.quiz.questionList[0];
        },

        setQuestionBackgroundImage: (state, action: PayloadAction<string>) => {
            state.activeQuestion.backgroundImage = action.payload;
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setQuestionType: (state, action: PayloadAction<QuestionTypeEnum>) => {
            const { answerList } = state.activeQuestion;

            // set question type
            state.activeQuestion.questionType = action.payload;

            // reset answer list
            state.activeQuestion.answerList = answerList.map((answer) => ({
                ...answer,
                isCorrect: false,
                body: ''
            }));

            if (action.payload === QuestionTypeEnum.TRUE_FALSE) {
                // set answer list
                state.activeQuestion.answerList[0].body = 'True';
                state.activeQuestion.answerList[1].body = 'False';
            }

            // change option question type
            state.activeQuestion.optionQuestion = OptionQuestionEnum.SINGLE;

            // update answer correct list in question
            state.activeQuestion.answerCorrect = state.activeQuestion.answerList.filter((answer) => answer.isCorrect === true).map((answer) => answer.name);

            // change question type in quiz
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setAnswerTime: (state, action: PayloadAction<number>) => {
            state.activeQuestion.answerTime = action.payload;
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setPointType: (state, action: PayloadAction<PointTypeEnum>) => {
            state.activeQuestion.pointType = action.payload;
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setOptionQuestion: (state, action: PayloadAction<OptionQuestionEnum>) => {
            const { answerList } = state.activeQuestion;

            // check if question type is true/false
            if (state.activeQuestion.questionType === QuestionTypeEnum.TRUE_FALSE) {
                toast.error(CreatorMessages.ERROR.CHANGE_QUESTION_TYPE, ToastOptions);
                return;
            }

            //  reset correct answer if option question is changed
            if (action.payload === OptionQuestionEnum.SINGLE) {
                state.activeQuestion.answerList = answerList.map((answer) => ({
                    ...answer,
                    isCorrect: false
                }));
            }

            //update answer correct list in question
            state.activeQuestion.answerCorrect = state.activeQuestion.answerList.filter((answer) => answer.isCorrect === true).map((answer) => answer.name);

            // set option question in active question
            state.activeQuestion.optionQuestion = action.payload;
            // update question list in quiz
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setQuestionContent: (state, action: PayloadAction<string>) => {
            state.activeQuestion.content = action.payload;
            state.quiz.questionList[state.activeQuestion.questionIndex - 1] = state.activeQuestion;
        },

        setQuestionAnswer: (state, action: PayloadAction<{ name: AnswerNameEnum; body: string }>) => {
            const { name, body } = action.payload;

            state.activeQuestion.answerList = state.activeQuestion.answerList.map((answer) => {
                if (answer.name === name) {
                    return {
                        ...answer,
                        body
                    };
                }
                return answer;
            });

            state.quiz.questionList[state.activeQuestion.questionIndex - 1].answerList = state.quiz.questionList[
                state.activeQuestion.questionIndex - 1
            ].answerList.map((answer) => {
                if (answer.name === name) {
                    return {
                        ...answer,
                        body
                    };
                }
                return answer;
            });
        },

        setCorrectAnswer: (state, action: PayloadAction<AnswerNameEnum>) => {
            const { answerList, questionType } = state.activeQuestion;

            // toggle answer correctness
            const toggleAnswerCorrectness = (answer: AnswerType) => ({
                ...answer,
                isCorrect: !answer.isCorrect
            });

            // check if there is already a correct answer
            if (answerList.some((answer) => answer.isCorrect)) {
                if (questionType === QuestionTypeEnum.TRUE_FALSE) {
                    // if question type is true/false, there can only be one correct answer
                    state.activeQuestion.answerList = answerList.map(toggleAnswerCorrectness);
                    state.activeQuestion.answerList[2].isCorrect = false;
                    state.activeQuestion.answerList[3].isCorrect = false;
                } else {
                    // if question type is not true/false, there can be multiple correct answers
                    state.activeQuestion.optionQuestion = OptionQuestionEnum.MULTIPLE;
                    state.activeQuestion.answerList = answerList.map((answer) => (answer.name === action.payload ? toggleAnswerCorrectness(answer) : answer));
                }
            } else {
                // if there is no correct answer, set the answer to correct
                state.activeQuestion.answerList = answerList.map((answer) => (answer.name === action.payload ? toggleAnswerCorrectness(answer) : answer));
            }

            //set answer correct list inquestion
            state.activeQuestion.answerCorrect = state.activeQuestion.answerList.filter((answer) => answer.isCorrect === true).map((answer) => answer.name);

            //update question list
            state.quiz.questionList[state.activeQuestion.questionIndex - 1].answerList = state.activeQuestion.answerList;
        },

        addQuestion: (state, action: PayloadAction<string>) => {
            // new question
            state.activeQuestion = {
                ...initialQuestion,
                creator: action.payload,
                questionIndex: state.activeQuestion.questionIndex + 1
            };

            // add new question to question list
            state.quiz.questionList = [
                ...state.quiz.questionList.slice(0, state.activeQuestion.questionIndex - 1),
                state.activeQuestion,
                ...state.quiz.questionList.slice(state.activeQuestion.questionIndex - 1)
            ];

            // reset question index
            state.quiz.questionList = state.quiz.questionList.map((question, index) => ({
                ...question,
                questionIndex: index + 1
            }));

            state.quiz.numberOfQuestions = state.quiz.questionList.length;

            toast.success(CreatorMessages.SUCCESS.ADD_QUESTION, ToastOptions);
        },

        setActiveQuestion: (state, action: PayloadAction<number>) => {
            state.quiz.questionList = [
                ...state.quiz.questionList.slice(0, state.activeQuestion.questionIndex - 1),
                state.activeQuestion,
                ...state.quiz.questionList.slice(state.activeQuestion.questionIndex)
            ];
            state.activeQuestion = state.quiz.questionList[action.payload - 1];
        },

        setDeleteQuestionIndex: (state, action: PayloadAction<number | null>) => {
            state.deleteQuestionIndex = action.payload;
        },

        setOpenDeleteQuestionDialog: (state, action: PayloadAction<boolean>) => {
            state.openDeleteQuestionDialog = action.payload;
        },

        deleteQuestion: (state, action: PayloadAction<number>) => {
            // delete question
            state.quiz.questionList = state.quiz.questionList.filter((question) => question.questionIndex !== action.payload);
            state.quiz.numberOfQuestions = state.quiz.questionList.length;
            toast.success(CreatorMessages.SUCCESS.DELETE_QUESTION, ToastOptions);

            // reset question index
            state.quiz.questionList = state.quiz.questionList.map((question, index) => ({
                ...question,
                questionIndex: index + 1
            }));

            // reset active question
            // check if active question is the first question
            if (state.activeQuestion.questionIndex === 1) {
                state.activeQuestion = state.quiz.questionList[0];
                return;
            }

            // check if active question is the last question and deleted question is not the last question
            if (state.activeQuestion.questionIndex === state.quiz.questionList.length + 1 && action.payload < state.quiz.questionList.length + 1) {
                state.activeQuestion = state.quiz.questionList[state.quiz.questionList.length - 1];
                return;
            }

            // check if active question is the last question
            if (state.activeQuestion.questionIndex === state.quiz.questionList.length + 1) {
                state.activeQuestion = state.quiz.questionList[action.payload - 2];
                return;
            }

            state.activeQuestion = state.quiz.questionList[state.activeQuestion.questionIndex - 1];
        },

        duplicateQuestion: (state, action: PayloadAction<number>) => {
            // duplicate question
            const question = state.quiz.questionList[action.payload - 1];

            // add duplicated question to question list
            state.quiz.questionList = [
                ...state.quiz.questionList.slice(0, action.payload),
                {
                    ...question,
                    questionIndex: action.payload + 1
                },
                ...state.quiz.questionList.slice(action.payload)
            ];

            // reset question index
            state.quiz.questionList = state.quiz.questionList.map((question, index) => ({
                ...question,
                questionIndex: index + 1
            }));

            // reset active question
            state.activeQuestion = state.quiz.questionList[action.payload];
            toast.success(CreatorMessages.SUCCESS.DUPLICATE_QUESTION, ToastOptions);
        },

        saveQuiz: (state) => {
            // complete quiz info
            const questionList = state.quiz.questionList.map((question) => {
                return {
                    ...question,
                    maxCorrectAnswer: question.questionType === QuestionTypeEnum.TRUE_FALSE || question.optionQuestion === OptionQuestionEnum.SINGLE ? 1 : 4, // max correct answer is 1 for true/false and single option question, 4 for multiple option question
                    correctAnswerCount: question.answerList.filter((answer) => answer.isCorrect).length, // count correct answer
                    answerCorrect: question.answerList.filter((answer) => answer.isCorrect === true).map((answer) => answer.name) // get correct answer
                };
            });

            state.quiz.questionList = [...questionList];

            console.log(state.quiz);
        }
    }
});

export const {
    updateQuizInfo,
    setQuizFromParams,
    setQuestionBackgroundImage,
    setQuestionType,
    setAnswerTime,
    setPointType,
    setOptionQuestion,
    setQuestionContent,
    setQuestionAnswer,
    setCorrectAnswer,
    addQuestion,
    setActiveQuestion,
    setDeleteQuestionIndex,
    deleteQuestion,
    setOpenDeleteQuestionDialog,
    duplicateQuestion,
    saveQuiz
} = quizCreatorSlice.actions;

const quizCreatorReducer = quizCreatorSlice.reducer;
export default quizCreatorReducer;
