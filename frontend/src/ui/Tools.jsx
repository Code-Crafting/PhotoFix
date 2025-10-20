import { useContext } from "react";
import { Theme } from "../context/Theme";

const Tools = ({ id, elId, title, setterFrn, icon: Icon }) => {
  const [isDark] = useContext(Theme);
  return (
    <div
      className={`relative ${
        isDark ? "text-textLight/80" : "text-textPrimary"
      } flex gap-2 items-center justify-center px-4 cursor-pointer w-max py-2`}
      onClick={setterFrn}
    >
      <Icon className="text-lg" />
      <p className={`text-lg`}>{title}</p>

      {elId === id && (
        <div
          className={`absolute w-full h-[5px] ${
            isDark ? "bg-logIn" : "features-gradient"
          } -bottom-0.5 rounded-full`}
        ></div>
      )}
    </div>
  );
};

export default Tools;
