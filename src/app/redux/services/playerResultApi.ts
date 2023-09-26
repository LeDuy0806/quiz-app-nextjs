import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import PlayerResultType from "src/app/types/playerResultType";

export const apiPlayerResult = createApi({
  reducerPath: "apiPlayerResult",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://server-auth-quocanh.onrender.com/',
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    createPlayerResult: builder.mutation<PlayerResultType, any>({
      query: ({ accessToken, newPlayerResult }) => ({
        url: `api/playerResult`,
        method: "POST",
        body: newPlayerResult,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    addPlayerResult: builder.mutation<PlayerResultType, any>({
      query: ({ accessToken, playerId, gameId, results }) => ({
        url: `api/playerResult/${playerId}/results/${gameId}`,
        method: "PATCH",
        body: results,
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),
  }),
});

export const { useCreatePlayerResultMutation, useAddPlayerResultMutation } =
  apiPlayerResult;
