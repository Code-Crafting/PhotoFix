import { useContext } from "react";
import { Theme } from "../context/Theme";

function Checkbox({ title, icon, setterFnc }) {
  const [isDark] = useContext(Theme);
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`w-4 aspect-square ${
          isDark ? "bg-textLight/70" : "bg-primary-dark"
        } rounded-sm grid place-items-center cursor-pointer`}
        onClick={setterFnc}
      >
        {icon}
      </div>
      <p
        onClick={setterFnc}
        className={`${
          isDark ? "text-textLight" : "text-textPrimary"
        } cursor-pointer`}
      >
        {title}
      </p>
    </div>
  );
}

export default Checkbox;
