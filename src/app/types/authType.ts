import UserType from "./userType";

export type AuthType = {
  message: string;
  data: {
    user: UserType;
    accessToken: string;
    refreshToken: string;
  };
} | null;
