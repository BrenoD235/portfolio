import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      title={
        theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro"
      }
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          size={20}
          className={`absolute text-gray-600 dark:text-gray-400 transition-all duration-300 ${
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          size={20}
          className={`absolute text-gray-600 dark:text-gray-400 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
