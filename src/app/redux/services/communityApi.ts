import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import CommunityType from "src/app/types/communityType";

export const apiCommunity = createApi({
  reducerPath: "apiCommunity",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://server-auth-quocanh.onrender.com/',
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getCommunity: builder.query<CommunityType, any>({
      query: ({ accessToken, id }) => ({
        url: `api/community/${id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    getCommunities: builder.query<CommunityType[], any>({
      query: (accessToken) => ({
        url: "api/community",
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    createCommunity: builder.mutation<CommunityType, any>({
      query: ({ accessToken, formData }) => ({
        url: "api/community",
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      }),
    }),

    deleteCommunity: builder.mutation<object, any>({
      query: ({ accessToken, id }) => ({
        url: `api/community/${id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    addQuizCommunity: builder.mutation<CommunityType, any>({
      query: ({ accessToken, id, quizId }) => ({
        url: `api/community/${id}/quiz/${quizId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    deleteQuizCommunity: builder.mutation<CommunityType, any>({
      query: ({ accessToken, id, quizId }) => ({
        url: `api/community/${id}/deleteQuiz/${quizId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    addMessageBox: builder.mutation<CommunityType, any>({
      query: ({ accessToken, id, message }) => ({
        url: `api/community/addMessage/${id}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: { message },
      }),
    }),
  }),
});

export const {
  useGetCommunityQuery,
  useGetCommunitiesQuery,
  useCreateCommunityMutation,
  useDeleteCommunityMutation,
  useAddQuizCommunityMutation,
  useDeleteQuizCommunityMutation,
  useAddMessageBoxMutation,
} = apiCommunity;
