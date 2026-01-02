import React from "react";
import assets from "../assets/assets/assets";
import { useEffect } from "react";

function ThemeToggleButton({ theme, setTheme }) {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button>
      {theme == "dark" ? (
        <img
          src={assets.sun_icon}
          alt="Sun"
          onClick={() => setTheme("light")}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Moon"
          onClick={() => setTheme("dark")}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        />
      )}
    </button>
  );
}

export default ThemeToggleButton;
