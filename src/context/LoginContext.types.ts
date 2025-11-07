export type UserType = {
  email: string;
  password: string;
  userId?: number;
};

export type LoginContextType = {
  user: UserType | null;
  setCurrentUser: (userData: UserType) => void;
  logout: () => void;
};
