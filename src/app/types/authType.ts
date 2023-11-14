import UserType, { InitUser } from './userType';

type AuthType = {
    user: UserType;
    accessToken: string;
    refreshToken: string;
};

export const InitAuth = {
    user: InitUser,
    accessToken: '',
    refreshToken: ''
} as AuthType;

export default AuthType;
