import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api';
import { RootState } from '../store';
import CategoryType from 'src/app/types/categoryType';

export const apiCategory = createApi({
    reducerPath: 'apiCategory',
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
        getAllCategories: builder.query<CategoryType[], void>({
            query: () => ({
                url: `api/categories`,
                method: 'GET'
            })
        }),
        getCategoryByName: builder.query<CategoryType, { name: string }>({
            query: ({ name }) => ({
                url: `api/categories/name/${name}`,
                method: 'GET'
            })
        }),
        getCategoryById: builder.query<CategoryType, { id: string }>({
            query: ({ id }) => ({
                url: `api/categories/${id}`,
                method: 'GET'
            })
        }),
        createCategory: builder.mutation<CategoryType, { name: string }>({
            query: ({ name }) => ({
                url: `api/categories`,
                method: 'POST',
                body: { name }
            })
        }),
        updateCategory: builder.mutation<CategoryType, { id: string; name: string }>({
            query: ({ id, name }) => ({
                url: `api/categories/${id}`,
                method: 'PUT',
                body: { name }
            })
        }),
        deleteCategory: builder.mutation<CategoryType, { id: string }>({
            query: ({ id }) => ({
                url: `api/categories/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryByNameQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = apiCategory;
