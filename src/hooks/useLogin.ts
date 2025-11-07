import { LoginContext } from "@/context/LoginContext";
import type { LoginContextType } from "@/context/LoginContext.types";
import { useContext } from "react";

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
