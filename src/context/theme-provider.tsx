"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ThemeContext } from "./theme-context";

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = Cookies.get("theme");
    setIsDarkMode(theme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;

    setIsDarkMode(next);
    Cookies.set("theme", next ? "dark" : "light", { expires: 1 });
  };

  if (!mounted) return null; 

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}