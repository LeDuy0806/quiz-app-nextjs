import UserType, { InitUser } from './userType';

type MessageType = {
    user: UserType;
    image?: string;
    message: string;
    createAt?: string;
    updateAt?: string;
};

export const InitMessage = {
    user: InitUser,
    image: '',
    message: '',
    createAt: '',
    updateAt: ''
} as MessageType;

export default MessageType;
