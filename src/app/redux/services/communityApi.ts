import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import CommunityType from 'src/app/types/communityType';
import { RootState } from '../store';
import MessageType from 'src/app/types/messageType';

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
        getCommunity: builder.query<CommunityType, { id: string }>({
            query: ({ id }) => ({
                url: `api/community/${id}`,
                method: 'GET'
            })
        }),

        getCommunities: builder.query<CommunityType[], void>({
            query: () => ({
                url: 'api/community',
                method: 'GET'
            })
        }),

        createCommunity: builder.mutation<CommunityType, { formData: Omit<CommunityType, '_id'> }>({
            query: ({ formData }) => ({
                url: 'api/community',
                method: 'POST',
                body: formData
            })
        }),

        deleteCommunity: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `api/community/${id}`,
                method: 'DELETE'
            })
        }),

        addQuizCommunity: builder.mutation<CommunityType, { id: string; quizId: string }>({
            query: ({ id, quizId }) => ({
                url: `api/community/${id}/quiz/${quizId}`,
                method: 'PUT'
            })
        }),

        deleteQuizCommunity: builder.mutation<CommunityType, { id: string; quizId: string }>({
            query: ({ id, quizId }) => ({
                url: `api/community/${id}/deleteQuiz/${quizId}`,
                method: 'PUT'
            })
        }),

        addMessageBox: builder.mutation<CommunityType, { id: string; message: Omit<MessageType, '_id'> }>({
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
