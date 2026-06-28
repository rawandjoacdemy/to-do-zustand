"use client";

import { createContext, useContext } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  username: string;
  login: (username: string, token: string) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw "context must be returned";

  return context;
};
