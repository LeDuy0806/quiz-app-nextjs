import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import LeaderBoardType from "src/app/types/leaderboardType";

export const apiLeaderBoard = createApi({
  reducerPath: "apiLeaderBoard",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://server-auth-quocanh.onrender.com/',
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getLeaderBoard: builder.query<LeaderBoardType, any>({
      query: ({ accessToken, leaderBoardId }) => ({
        url: `api/leaderBoard/${leaderBoardId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    createLeaderBoard: builder.mutation<LeaderBoardType, any>({
      query: ({ accessToken, newLeaderBoard }) => ({
        url: `api/leaderBoard`,
        method: "POST",
        body: newLeaderBoard,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    updateQuestionLeaderBoard: builder.mutation<LeaderBoardType, any>({
      query: ({ accessToken, leaderBoardId, update }) => ({
        url: `api/leaderBoard/${leaderBoardId}/questionLeaderBoard`,
        method: "PATCH",
        body: update,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    updateCurrentLeaderBoard: builder.mutation<LeaderBoardType, any>({
      query: ({ accessToken, leaderBoardId, update }) => ({
        url: `api/leaderBoard/${leaderBoardId}/currentLeaderBoard`,
        method: "PATCH",
        body: update,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),
  }),
});

export const {
  useGetLeaderBoardQuery,
  useCreateLeaderBoardMutation,
  useUpdateQuestionLeaderBoardMutation,
  useUpdateCurrentLeaderBoardMutation,
} = apiLeaderBoard;
