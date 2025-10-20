import { useContext } from "react";
import { Theme } from "../context/Theme";

const InputField = ({ id, type, onChange, customStyle }) => {
  const [isDark] = useContext(Theme);
  return (
    <input
      type={type}
      id={id}
      className={`${
        isDark ? "bg-textSecondary/50" : "bg-primary-dark"
      }  outline-none p-2 rounded-lg ${customStyle} ${
        type === "number" &&
        "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      }`}
      onChange={onChange}
    />
  );
};

export default InputField;
