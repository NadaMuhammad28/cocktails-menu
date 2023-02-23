import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
const DarkMode = () => {
  let localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme || "light-theme");
  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light-theme" ? <MdOutlineDarkMode /> : <FiSun />}
      </button>
    </>
  );
};

export default DarkMode;
