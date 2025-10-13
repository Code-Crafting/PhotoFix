import React from "react";
import InputField from "../InputField";
import ColorPicker from "../ColorPicker";
import InputLabel from "../InputLabel";

const Border = () => {
  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar ">
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="borderWidth" title="Border Width" />
        <InputField id="borderWidth" type="number" />
      </div>
      <ColorPicker title="Border Color" />
    </div>
  );
};

export default Border;
