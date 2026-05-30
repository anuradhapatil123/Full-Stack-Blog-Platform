import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {

  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;