import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import GameType from "src/app/types/gameType";

export const apiGame = createApi({
  reducerPath: "apiGame",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://server-auth-quocanh.onrender.com/',
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    createGame: builder.mutation<GameType, any>({
      query: (newGame) => ({
        url: `api/game`,
        method: "POST",
        body: newGame,
      }),
    }),

    deleteGame: builder.mutation<object, any>({
      query: (gameId) => ({
        url: `api/game/${gameId}`,
        method: "DELETE",
      }),
    }),

    addPlayer: builder.mutation<GameType, any>({
      query: ({ gameId, playerId }) => ({
        url: `api/game/${gameId}/players`,
        method: "PATCH",
        body: { playerId },
      }),
    }),
  }),
});

export const {
  useCreateGameMutation,
  useDeleteGameMutation,
  useAddPlayerMutation,
} = apiGame;
