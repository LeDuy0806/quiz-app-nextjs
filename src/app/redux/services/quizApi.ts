import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import QuizType from 'src/app/types/quizType';
import QuestionType from 'src/app/types/questionType';
import { RootState } from '../store';

type DiscoverQuizType = {
    [key: string]: QuizType[];
};
type PublicQuizesType = {
    data: QuizType[];
    currentPage: number;
    pageSize: number;
    numberOfPages: number;
};

export const apiQuiz = createApi({
    reducerPath: 'apiQuiz',
    baseQuery: fetchBaseQuery({
        baseUrl: API,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.authData?.accessToken;

            headers.set('Content-Type', 'application/json');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    keepUnusedDataFor: 20,
    endpoints: (builder) => ({
        getPublicQuizes: builder.query<PublicQuizesType, { sectionName?: string; page: number; pageSize: number }>({
            query: ({ sectionName, page, pageSize }) => ({
                url: `api/quiz/public?sectionName=${sectionName ? sectionName : ''}&page=${page}&pageSize=${pageSize}`,
                method: 'GET'
            })
        }),

        getQuizById: builder.query<QuizType, { quizId: string }>({
            query: ({ quizId }) => ({
                url: `api/quiz/${quizId}`,
                method: 'GET'
            })
        }),

        getDiscoverQuizzes: builder.query<DiscoverQuizType, void>({
            query: () => ({
                url: 'api/quiz/discover',
                method: 'GET'
            })
        }),

        getTeacherQuizzes: builder.query<QuizType[], { teacherId: string }>({
            query: ({ teacherId }) => ({
                url: `api/quiz/teacher/${teacherId}`,
                method: 'GET'
            })
        }),

        createQuiz: builder.mutation<QuizType, { quizData: Omit<QuizType, '_id'> }>({
            query: ({ quizData }) => ({
                url: `api/quiz`,
                method: 'POST',
                body: quizData
            })
        }),

        importQuiz: builder.mutation<QuizType, { quizData: QuizType; userId: string }>({
            query: ({ quizData, userId }) => ({
                url: `api/quiz/import`,
                method: 'POST',
                body: { quizData, userId }
            })
        }),

        updateQuiz: builder.mutation<QuizType, { quizId: string; updateQuiz: QuizType }>({
            query: ({ quizId, updateQuiz }) => ({
                url: `api/quiz/${quizId}`,
                method: 'PUT',
                body: updateQuiz
            })
        }),

        deleteQuiz: builder.mutation<void, { quizId: string }>({
            query: ({ quizId }) => ({
                url: `api/quiz/${quizId}`,
                method: 'DELETE'
            })
        }),

        likeQuiz: builder.mutation<QuizType, { userId: string }>({
            query: ({ userId }) => ({
                url: `api/quiz/${userId}/likeQuiz`,
                method: 'PATCH'
            })
        }),

        commentQuiz: builder.mutation<QuizType, { userId: string; comment: Comment }>({
            query: ({ userId, comment }) => ({
                url: `api/quiz/${userId}/commentQuiz`,
                method: 'POST',
                body: comment
            })
        }),

        addQuestion: builder.mutation<QuestionType, { quizId: string; newQuestion: Omit<QuestionType, '_id'> }>({
            query: ({ quizId, newQuestion }) => ({
                url: `api/quiz/${quizId}/questions`,
                method: 'POST',
                body: newQuestion
            })
        }),

        getQuestion: builder.query<QuestionType, { quizId: string; questionId: string }>({
            query: ({ quizId, questionId }) => ({
                url: `api/quiz/${quizId}/questions/${questionId}`,
                method: 'GET'
            })
        }),

        getQuestions: builder.query<QuestionType[], { quizId: string }>({
            query: ({ quizId }) => ({
                url: `api/quiz/${quizId}/questions`,
                method: 'GET'
            })
        }),

        updateQuestion: builder.mutation<QuestionType, { quizId: string; questionId: string; newQuestion: QuestionType }>({
            query: ({ quizId, questionId, newQuestion }) => ({
                url: `api/quiz/${quizId}/questions/${questionId}`,
                method: 'PUT',
                body: newQuestion
            })
        }),

        deleteQuestion: builder.mutation<object, { quizId: string; questionId: string }>({
            query: ({ quizId, questionId }) => ({
                url: `api/quiz/${quizId}/questions/${questionId}`,
                method: 'DELETE'
            })
        })
    })
});

export const {
    useGetPublicQuizesQuery,
    useGetQuizByIdQuery,
    useGetDiscoverQuizzesQuery,
    useGetTeacherQuizzesQuery,
    useImportQuizMutation,
    useCreateQuizMutation,
    useUpdateQuizMutation,
    useDeleteQuizMutation,
    useLikeQuizMutation,
    useCommentQuizMutation,
    useAddQuestionMutation,
    useGetQuestionsQuery,
    useGetQuestionQuery,
    useUpdateQuestionMutation,
    useDeleteQuestionMutation
} = apiQuiz;
