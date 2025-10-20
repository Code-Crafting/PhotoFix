import { useContext } from "react";
import { Theme } from "../context/Theme";
import InputLabel from "./InputLabel";

const RangeInput = ({ title, defaultValue, setterFnc, min, max }) => {
  const [isDark] = useContext(Theme);
  return (
    <div>
      <InputLabel title={title} />
      <input
        type="range"
        min={min}
        max={max}
        value={defaultValue}
        onChange={setterFnc}
        className={`w-full h-2 ${
          isDark ? "bg-textSecondary/50" : "bg-primary-dark"
        } rounded-lg appearance-none cursor-pointer`}
      />
      <div className={`flex justify-between ${isDark && "text-textLight"}`}>
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  );
};

export default RangeInput;
