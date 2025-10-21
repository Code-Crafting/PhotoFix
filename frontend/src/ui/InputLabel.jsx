import { useContext } from "react";
import { Theme } from "../context/Theme";

const InputLabel = ({ htmlFor, title }) => {
  const [isLight] = useContext(Theme);
  return (
    <label
      htmlFor={htmlFor}
      className={`${
        isLight ? "text-textLight" : "text-textPrimary"
      } text-lg cursor-pointer`}
    >
      {title}
    </label>
  );
};

export default InputLabel;
