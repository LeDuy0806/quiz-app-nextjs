import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import GameType from 'src/app/types/gameType';

export const apiGame = createApi({
    reducerPath: 'apiGame',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://server-auth-quocanh.onrender.com/',
        baseUrl: API
    }),
    keepUnusedDataFor: 20,
    endpoints: (builder) => ({
        getGame: builder.query<GameType, { accessToken: string | undefined; gameId: string }>({
            query: ({ accessToken, gameId }) => ({
                url: `api/game/${gameId}`,
                method: 'GET',
                headers: { Authorization: `Bearer ${accessToken}` }
            })
        }),

        createGame: builder.mutation<GameType, { accessToken: string | undefined; newGame: Omit<GameType, '_id'> }>({
            query: ({ accessToken, newGame }) => ({
                url: `api/game`,
                method: 'POST',
                body: newGame,
                headers: { Authorization: `Bearer ${accessToken}` }
            })
        }),

        deleteGame: builder.mutation<object, { accessToken: string | undefined; gameId: string }>({
            query: ({ accessToken, gameId }) => ({
                url: `api/game/${gameId}`,
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` }
            })
        }),

        addPlayer: builder.mutation<any, { accessToken: string | undefined; gameId: string; playerId: string }>({
            query: ({ accessToken, gameId, playerId }) => ({
                url: `api/game/${gameId}/addPlayer`,
                method: 'PATCH',
                body: { playerId },
                headers: { Authorization: `Bearer ${accessToken}` }
            })
        }),

        removePlayer: builder.mutation<any, { accessToken: string | undefined; gameId: string; playerId: string | undefined }>({
            query: ({ accessToken, gameId, playerId }) => ({
                url: `api/game/${gameId}/removePlayer`,
                method: 'PATCH',
                body: { playerId },
                headers: { Authorization: `Bearer ${accessToken}` }
            })
        })
    })
});

export const { useGetGameQuery, useCreateGameMutation, useDeleteGameMutation, useAddPlayerMutation, useRemovePlayerMutation } = apiGame;
