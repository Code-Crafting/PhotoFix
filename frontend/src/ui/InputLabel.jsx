import { useContext } from "react";
import { Theme } from "../context/Theme";

const InputLabel = ({ htmlFor, title }) => {
  const [isDark] = useContext(Theme);
  return (
    <label
      htmlFor={htmlFor}
      className={`${
        isDark ? "text-textLight" : "text-textPrimary"
      } text-lg cursor-pointer`}
    >
      {title}
    </label>
  );
};

export default InputLabel;
