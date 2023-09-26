import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import QuizType from "src/app/types/quizType";
import QuestionType from "src/app/types/questionType";

export const apiQuiz = createApi({
  reducerPath: "apiQuiz",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getPublicQuizzes: builder.query<QuizType[], any>({
      query: (accessToken) => ({
        url: "api/quiz/public",
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    getTeacherQuizzes: builder.query<QuizType[], any>({
      query: ({ accessToken, teacherId }) => ({
        url: `api/quiz/teacher/${teacherId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    createQuiz: builder.mutation<QuizType, any>({
      query: ({ accessToken, quizData }) => ({
        url: `api/quiz`,
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: quizData,
      }),
    }),

    importQuiz: builder.mutation<QuizType, any>({
      query: ({ accessToken, quizData, userId }) => ({
        url: `api/quiz/import`,
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: { quizData, userId },
      }),
    }),

    updateQuiz: builder.mutation<QuizType, any>({
      query: ({ accessToken, quizId, updateQuiz }) => ({
        url: `api/quiz/${quizId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: updateQuiz,
      }),
    }),

    deleteQuiz: builder.mutation<object, any>({
      query: ({ accessToken, quizId }) => ({
        url: `api/quiz/${quizId}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    likeQuiz: builder.mutation<QuizType, any>({
      query: ({ accessToken, userId }) => ({
        url: `api/quiz/${userId}/likeQuiz`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    commentQuiz: builder.mutation<QuizType, any>({
      query: ({ accessToken, userId, comment }) => ({
        url: `api/quiz/${userId}/commentQuiz`,
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: comment,
      }),
    }),

    addQuestion: builder.mutation<QuestionType, any>({
      query: ({ accessToken, quizId, newQuestion }) => ({
        url: `api/quiz/${quizId}/questions`,
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: newQuestion,
      }),
    }),

    getQuestion: builder.query<QuestionType, any>({
      query: ({ accessToken, quizId, questionId }) => ({
        url: `api/quiz/${quizId}/questions/${questionId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    getQuestions: builder.query<QuestionType[], any>({
      query: ({ accessToken, quizId }) => ({
        url: `api/quiz/${quizId}/questions`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    updateQuestion: builder.mutation<QuestionType, any>({
      query: ({ accessToken, quizId, questionId, newQuestion }) => ({
        url: `api/quiz/${quizId}/questions/${questionId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: newQuestion,
      }),
    }),

    deleteQuestion: builder.mutation<object, any>({
      query: ({ accessToken, quizId, questionId }) => ({
        url: `api/quiz/${quizId}/questions/${questionId}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),
  }),
});

export const {
  // useGetQuizzesQuery,
  useGetPublicQuizzesQuery,
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
  useDeleteQuestionMutation,
} = apiQuiz;
