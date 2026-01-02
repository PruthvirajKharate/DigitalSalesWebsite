import React, { useState } from "react";
import assets from "../assets/assets/assets";
import ThemeToggleButton from "./ThemeToggleButton";
import { motion } from "motion/react";

function Navbar({ theme, setTheme }) {
  function handleToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  function changeMenuState() {
    setSideMenuOpen(!sideMenuOpen);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
      sticky top-0 z-20 backdrop-blur-xl 
      font-medium bg-white/50 dark:bg-gray-900/50"
    >
      <img
        src={theme == "dark" ? assets.logo_dark : assets.logo}
        alt="Logo of website"
        className="w-28 sm:w-40 lg:w-48"
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm
      ${
        sideMenuOpen
          ? "max-sm:w-60 max-sm:pl-10"
          : "max-sm:w-0 max-sm:pl-0 overflow-hidden"
      } max-sm:fixed top-0 right-0 bottom-0 max-sm:min-h-screen
      max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex
      sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={changeMenuState}
        />
        <a href="#" className="sm:hover:border-b">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a href="#OurWork" className="sm:hover:border-b">
          Our Work
        </a>
        <a href="#" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-4 px-2">
        <a
          href="#Connect"
          className="text-sm flex button-primary px-2 py-2 sm:px-4 rounded-full button-primary-light 
          bg-black text-white dark:button-primary-dark dark:bg-white dark:text-black
          max-sm:hidden"
        >
          Connect
        </a>
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
        <img
          src={theme == "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={changeMenuState}
          alt="Menu"
          className="sm:hidden w-10"
        />
      </div>
    </motion.div>
  );
}

export default Navbar;
