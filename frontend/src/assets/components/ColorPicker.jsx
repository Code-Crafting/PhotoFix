import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ColorPicker = ({ title }) => {
  const [colorCodes, setColorCodes] = useState([
    "#f0f5f1",
    "#e31809",
    "#e8dd0e",
    "#1149f2",
    "#db0daf",
  ]);
  return (
    <div>
      <p>{title}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {colorCodes.map((code, i) => {
          return (
            <div
              key={i}
              className={`w-[25px] aspect-square rounded-full hover:cursor-pointer`}
              style={{ backgroundColor: code }}
            ></div>
          );
        })}
        <label
          htmlFor="color"
          className="w-[25px] aspect-square border-2 border-dashed rounded-full grid place-items-center hover:cursor-pointer"
        >
          <FaPlus className="text-[10px]" />
          <input type="color" id="color" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ColorPicker;
