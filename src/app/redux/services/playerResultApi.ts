import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import PlayerResultType, { AnswerPlayerType } from 'src/app/types/playerResultType';
import { RootState } from '../store';
import { TypePlayerResult } from 'src/app/variable';

export const apiPlayerResult = createApi({
    reducerPath: 'apiPlayerResult',
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
        createPlayerResult: builder.mutation<PlayerResultType, { newPlayerResult: Omit<PlayerResultType, '_id'> }>({
            query: ({ newPlayerResult }) => ({
                url: `api/playerResult`,
                method: 'POST',
                body: newPlayerResult
            })
        }),

        updatePlayerResult: builder.mutation<PlayerResultType, { id: string; answers: AnswerPlayerType[]; score: number }>({
            query: ({ id, answers, score }) => ({
                url: `api/playerResult/${id}`,
                method: 'PATCH',
                body: { answers, score }
            })
        }),

        removePlayerResult: builder.mutation<PlayerResultType, { playerId: string }>({
            query: ({ playerId }) => ({
                url: `api/playerResult/${playerId}`,
                method: 'DELETE'
            })
        }),

        addPlayerResult: builder.mutation<PlayerResultType, { playerId: string; gameId: string; results: any }>({
            query: ({ playerId, gameId, results }) => ({
                url: `api/playerResult/${playerId}/results/${gameId}`,
                method: 'PATCH',
                body: results
            })
        })
    })
});

export const { useCreatePlayerResultMutation, useUpdatePlayerResultMutation, useAddPlayerResultMutation, useRemovePlayerResultMutation } = apiPlayerResult;
