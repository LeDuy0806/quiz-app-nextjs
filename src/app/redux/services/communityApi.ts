import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import CommunityType from 'src/app/types/communityType';
import { RootState } from '../store';

export const apiCommunity = createApi({
    reducerPath: 'apiCommunity',
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
        getCommunity: builder.query<CommunityType, any>({
            query: ({ id }) => ({
                url: `api/community/${id}`,
                method: 'GET'
            })
        }),

        getCommunities: builder.query<CommunityType[], any>({
            query: () => ({
                url: 'api/community',
                method: 'GET'
            })
        }),

        createCommunity: builder.mutation<CommunityType, any>({
            query: ({ formData }) => ({
                url: 'api/community',
                method: 'POST',
                body: formData
            })
        }),

        deleteCommunity: builder.mutation<object, any>({
            query: ({ id }) => ({
                url: `api/community/${id}`,
                method: 'DELETE'
            })
        }),

        addQuizCommunity: builder.mutation<CommunityType, any>({
            query: ({ id, quizId }) => ({
                url: `api/community/${id}/quiz/${quizId}`,
                method: 'PUT'
            })
        }),

        deleteQuizCommunity: builder.mutation<CommunityType, any>({
            query: ({ id, quizId }) => ({
                url: `api/community/${id}/deleteQuiz/${quizId}`,
                method: 'PUT'
            })
        }),

        addMessageBox: builder.mutation<CommunityType, any>({
            query: ({ id, message }) => ({
                url: `api/community/addMessage/${id}`,
                method: 'PUT',
                body: { message }
            })
        })
    })
});

export const {
    useGetCommunityQuery,
    useGetCommunitiesQuery,
    useCreateCommunityMutation,
    useDeleteCommunityMutation,
    useAddQuizCommunityMutation,
    useDeleteQuizCommunityMutation,
    useAddMessageBoxMutation
} = apiCommunity;
