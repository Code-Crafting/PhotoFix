import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import InputLabel from "./InputLabel";
import Checkbox from "./Checkbox";

const ColorPicker = ({ setterFnc }) => {
  return (
    <input
      type="color"
      id="color"
      className="cursor-pointer"
      onChange={setterFnc}
    />
  );
};

export default ColorPicker;
