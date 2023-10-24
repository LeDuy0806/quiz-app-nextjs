import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import LeaderBoardType from 'src/app/types/leaderboardType';
import { RootState } from '../store';

export const apiLeaderBoard = createApi({
    reducerPath: 'apiLeaderBoard',
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
        getLeaderBoard: builder.query<LeaderBoardType, { leaderBoardId: string }>({
            query: ({ leaderBoardId }) => ({
                url: `api/leaderBoard/${leaderBoardId}`,
                method: 'GET'
            })
        }),

        createLeaderBoard: builder.mutation<LeaderBoardType, { newLeaderBoard: Omit<LeaderBoardType, '_id'> }>({
            query: ({ newLeaderBoard }) => ({
                url: `api/leaderBoard`,
                method: 'POST',
                body: newLeaderBoard
            })
        }),

        updateQuestionLeaderBoard: builder.mutation<LeaderBoardType, { leaderBoardId: string; update: LeaderBoardType }>({
            query: ({ leaderBoardId, update }) => ({
                url: `api/leaderBoard/${leaderBoardId}/questionLeaderBoard`,
                method: 'PATCH',
                body: update
            })
        }),

        updateCurrentLeaderBoard: builder.mutation<LeaderBoardType, { leaderBoardId: string; update: LeaderBoardType }>({
            query: ({ leaderBoardId, update }) => ({
                url: `api/leaderBoard/${leaderBoardId}/currentLeaderBoard`,
                method: 'PATCH',
                body: update
            })
        })
    })
});

export const { useGetLeaderBoardQuery, useCreateLeaderBoardMutation, useUpdateQuestionLeaderBoardMutation, useUpdateCurrentLeaderBoardMutation } =
    apiLeaderBoard;
