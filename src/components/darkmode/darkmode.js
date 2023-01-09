import { useEffect, useRef, useState } from "react";
import "./darkmode.css";
const DarkMode = () => {
  let localTheme = localStorage.getItem("theme");
  const rre = useRef();
  const [theme, setTheme] = useState(localTheme || "light-theme");
  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark-theme")
      rre.current.checked = true;
  }, []);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <input
        className="theme-input"
        type="checkbox"
        id="drk-btn"
        ref={rre}
        onChange={toggleTheme}
      />
      <label for="drk-btn"></label>
    </>
  );
};

export default DarkMode;
