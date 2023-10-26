type UserType = {
    _id: string;
    mail: string;
    userName: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: string;
    point: number;
    follows: UserType[];
    friends: UserType[];
    emailToken: '';
    isVerified: boolean;
    update: {
        profile: string;
        mail: string;
        password: string;
    };
};

export const InitUser = {
    _id: '',
    mail: '',
    userName: '',
    firstName: '',
    lastName: '',
    avatar: '',
    userType: '',
    point: 0,
    follows: [],
    friends: [],
    emailToken: '',
    isVerified: true,
    update: {
        profile: '',
        mail: '',
        password: ''
    }
} as UserType;

export default UserType;
