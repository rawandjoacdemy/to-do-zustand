"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "./auth-context";

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = Cookies.get("auth-token");
    const savedUsername = Cookies.get("username");

    if (token) {
      setIsLoggedIn(true);
      setUsername(savedUsername || "");
    }
  }, []);

  const login = (username: string, token: string) => {
    Cookies.set("auth-token", token);
    Cookies.set("username", username);

    setUsername(username);
    setIsLoggedIn(true);

  };

  const logout = () => {
    Cookies.remove("auth-token");
    Cookies.remove("username");

    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
