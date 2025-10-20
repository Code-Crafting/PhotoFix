import { useContext } from "react";
import { Theme } from "../context/Theme";

const MultipleOptions = ({ id, title, fn, selectedOption }) => {
  const [isDark] = useContext(Theme);
  const getOptionsClasses = () => {
    if (isDark) {
      return selectedOption === id ? "bg-signUp" : "bg-logIn";
    } else {
      return selectedOption === id ? "bg-primary-dark/70" : "bg-primary-dark";
    }
  };
  return (
    <div
      onClick={fn}
      className={`shadow-header ${getOptionsClasses()}  ${
        isDark ? "text-light" : "text-textPrimary/50"
      } px-2 py-1 rounded-lg hover:cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default MultipleOptions;
