import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import PlayerResultType from 'src/app/types/playerResultType';
import { RootState } from '../store';

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

        removePlayerResult: builder.mutation<PlayerResultType, { playerId: string | undefined }>({
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

export const { useCreatePlayerResultMutation, useAddPlayerResultMutation, useRemovePlayerResultMutation } = apiPlayerResult;
