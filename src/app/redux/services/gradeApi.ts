import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import { RootState } from '../store';
import GradeType from 'src/app/types/gradeType';

export const apiGrade = createApi({
    reducerPath: 'apiGrade',
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
        getAllGrades: builder.query<GradeType[], void>({
            query: () => ({
                url: `api/grades`,
                method: 'GET'
            })
        }),
        getGradeById: builder.query<GradeType, { id: string }>({
            query: ({ id }) => ({
                url: `api/grades/${id}`,
                method: 'GET'
            })
        }),
        getGradeByName: builder.query<GradeType, { name: string }>({
            query: ({ name }) => ({
                url: `api/grades/name/${name}`,
                method: 'GET'
            })
        }),
        createGrade: builder.mutation<GradeType, { name: string }>({
            query: ({ name }) => ({
                url: `api/grades`,
                method: 'POST',
                body: { name }
            })
        }),
        updateGrade: builder.mutation<GradeType, { id: string; name: string }>({
            query: ({ id, name }) => ({
                url: `api/grades/${id}`,
                method: 'PUT',
                body: { name }
            })
        }),
        deleteGrade: builder.mutation<GradeType, { id: string }>({
            query: ({ id }) => ({
                url: `api/grades/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useGetAllGradesQuery, useGetGradeByIdQuery, useGetGradeByNameQuery, useCreateGradeMutation, useUpdateGradeMutation, useDeleteGradeMutation } =
    apiGrade;
