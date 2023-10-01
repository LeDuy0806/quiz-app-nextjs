import UserType from "./userType";

export type AuthType = {
  user: UserType;
  accessToken: string;
  refreshToken: string;
} | null;
