type UserType =
  | {
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
      isVerified: boolean;
      update: {
        profile: Date;
        mail: Date;
        password: Date;
      };
    }
  | undefined;

export default UserType;
