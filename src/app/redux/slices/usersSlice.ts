import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserType from "src/app/types/userType";

type InitialType = {
  users: UserType[];
};

const initialState = {
  users: [],
} as InitialType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },

    createUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action: PayloadAction<UserType>) => {
      state.users = state.users.map((user) => {
        return user?._id === action.payload?._id ? action.payload : user;
      });
    },

    deleteUser: (state, action: PayloadAction<UserType>) => {
      state.users = state.users.filter((user) => {
        return user?._id !== action.payload?._id;
      });
    },
  },
});

export const { fetchUsers, updateUser, createUser, deleteUser } =
  userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
