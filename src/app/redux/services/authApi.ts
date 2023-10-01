import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import { AuthType } from 'src/app/types/authType';
import { SignUpType, LoginType } from 'src/app/variable';

export const apiAuth = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: API
    }),
    keepUnusedDataFor: 20,
    endpoints: (builder) => ({
        checkMailExists: builder.mutation<any, any>({
            query: (formData) => ({
                url: 'api/auth/checkEmail',
                method: 'POST',
                body: formData
            })
        }),

        checkUserNameExits: builder.mutation<any, any>({
            query: (formData) => ({
                url: 'api/auth/checkUserName',
                method: 'POST',
                body: formData
            })
        }),

        registerUser: builder.mutation<object, SignUpType>({
            query: (formData) => ({
                url: 'api/auth/register',
                method: 'POST',
                body: formData
            })
        }),

        loginUser: builder.mutation<AuthType, LoginType>({
            query: (formData) => ({
                url: 'api/auth/login',
                method: 'POST',
                body: formData
            })
        })
    })
});

export const {
    useCheckMailExistsMutation,
    useCheckUserNameExitsMutation,
    useRegisterUserMutation,
    useLoginUserMutation
} = apiAuth;
