import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../api";
import UserType from "src/app/types/userType";

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://server-auth-quocanh.onrender.com/',
    baseUrl: API,
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserType, { accessToken: string; userId: string }>({
      query: ({ accessToken, userId }) => ({
        url: `api/user/${userId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    getUsers: builder.query<UserType[], { accessToken: string }>({
      query: (accessToken) => ({
        url: "api/user",
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    updateUser: builder.mutation<
      UserType,
      { accessToken: string; userId: string; formData: UserType }
    >({
      query: ({ accessToken, userId, formData }) => ({
        url: `api/user/${userId}`,
        method: "PATCH",
        headers: {
          Accept: "*application/json*",
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }),
    }),

    addFriend: builder.mutation<
      UserType,
      { accessToken: string; myId: string; friendId: string }
    >({
      query: ({ accessToken, myId, friendId }) => ({
        url: `api/user/${myId}/addFriend/${friendId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    followUser: builder.mutation<UserType, any>({
      query: ({ accessToken, myId, friendId }) => ({
        url: `api/user/${myId}/follow/${friendId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    unFollowUser: builder.mutation<UserType, any>({
      query: ({ accessToken, myId, friendId }) => ({
        url: `api/user/${myId}/unFollow/${friendId}`,
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),

    uploadCloud: builder.mutation({
      query: ({ formData }) => ({
        url: `upload`,
        method: "POST",
        headers: {
          Accept: "*application/json*",
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
          // Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddFriendMutation,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useUploadCloudMutation,
} = apiUser;
