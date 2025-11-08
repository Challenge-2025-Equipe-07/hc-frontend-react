import { createContext, useEffect, useState, type ReactNode } from "react";
import type { LoginContextType, UserType } from "./LoginContext.types";

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getUser = window.localStorage.getItem("user");
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
  }, []);

  const logout = () => {
    if (user === null) return;
    setUser(null);
    window.localStorage.removeItem("user");
    window.location.pathname = "/";
  };

  const setCurrentUser = (userData: UserType) => {
    console.log({ userData });

    setUser(userData);
    window.localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <LoginContext.Provider value={{ user, setCurrentUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
