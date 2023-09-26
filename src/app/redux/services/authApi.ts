import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import { AuthType } from "src/app/types/authType";
import { RegisterType, LoginType } from "src/app/variable";

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    registerUser: builder.mutation<object, RegisterType>({
      query: (formData) => ({
        url: "api/auth/register",
        method: "POST",
        body: formData,
      }),
    }),

    loginUser: builder.mutation<AuthType, LoginType>({
      query: (formData) => ({
        url: "api/auth/login",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = apiAuth;
