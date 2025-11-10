export type UserType = {
  username: string;
  password?: string;
  userId: number;
  usernameId: string;
};

export type LoginContextType = {
  user: UserType | null;
  setCurrentUser: (userData: UserType) => void;
  logout: () => void;
};
