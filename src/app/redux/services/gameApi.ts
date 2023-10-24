import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import GameType from 'src/app/types/gameType';
import { RootState } from '../store';

export const apiGame = createApi({
    reducerPath: 'apiGame',
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
        getGame: builder.query<GameType, { gameId: string }>({
            query: ({ gameId }) => ({
                url: `api/game/${gameId}`,
                method: 'GET'
            })
        }),

        createGame: builder.mutation<GameType, { newGame: Omit<GameType, '_id'> }>({
            query: ({ newGame }) => ({
                url: `api/game`,
                method: 'POST',
                body: newGame
            })
        }),

        deleteGame: builder.mutation<object, { gameId: string }>({
            query: ({ gameId }) => ({
                url: `api/game/${gameId}`,
                method: 'DELETE'
            })
        }),

        addPlayer: builder.mutation<any, { gameId: string; playerId: string }>({
            query: ({ gameId, playerId }) => ({
                url: `api/game/${gameId}/addPlayer`,
                method: 'PATCH',
                body: { playerId }
            })
        }),

        removePlayer: builder.mutation<any, { gameId: string; playerId: string | undefined }>({
            query: ({ gameId, playerId }) => ({
                url: `api/game/${gameId}/removePlayer`,
                method: 'PATCH',
                body: { playerId }
            })
        })
    })
});

export const { useGetGameQuery, useCreateGameMutation, useDeleteGameMutation, useAddPlayerMutation, useRemovePlayerMutation } = apiGame;
