import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import UserType from 'src/app/types/userType';
import { RootState } from '../store';

export const apiUser = createApi({
    reducerPath: 'apiUser',
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
    endpoints: (builder) => ({
        getUser: builder.query<UserType, { userId: string }>({
            query: ({ userId }) => ({
                url: `api/user/${userId}`,
                method: 'GET'
            })
        }),

        getUsers: builder.query<UserType[], { accessToken: string }>({
            query: () => ({
                url: 'api/user',
                method: 'GET'
            })
        }),

        updateUser: builder.mutation<UserType, { userId: string; formData: UserType }>({
            query: ({ userId, formData }) => ({
                url: `api/user/${userId}`,
                method: 'PATCH',
                headers: {
                    Accept: '*application/json*',
                    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                body: formData
            })
        }),

        addFriend: builder.mutation<UserType, { myId: string; friendId: string }>({
            query: ({ myId, friendId }) => ({
                url: `api/user/${myId}/addFriend/${friendId}`,
                method: 'PUT'
            })
        }),

        followUser: builder.mutation<UserType, any>({
            query: ({ myId, friendId }) => ({
                url: `api/user/${myId}/follow/${friendId}`,
                method: 'PUT'
            })
        }),

        unFollowUser: builder.mutation<UserType, any>({
            query: ({ myId, friendId }) => ({
                url: `api/user/${myId}/unFollow/${friendId}`,
                method: 'PUT'
            })
        }),

        uploadCloud: builder.mutation({
            query: ({ formData }) => ({
                url: `upload`,
                method: 'POST',
                headers: {
                    Accept: '*application/json*',
                    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                body: formData
            })
        })
    })
});

export const {
    useGetUserQuery,
    useGetUsersQuery,
    useUpdateUserMutation,
    useAddFriendMutation,
    useFollowUserMutation,
    useUnFollowUserMutation,
    useUploadCloudMutation
} = apiUser;
