import UserType from "./userType";

type MessageType = {
  user: UserType;
  image?: string;
  message: string;
  createAt: Date;
};

export default MessageType;
