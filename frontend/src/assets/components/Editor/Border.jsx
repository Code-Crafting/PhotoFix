import React from "react";
import InputField from "../InputField";
import ColorPicker from "../ColorPicker";

const Border = () => {
  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar ">
      <InputField label="Border Width" type="number" />
      <ColorPicker title="Border Color" />
    </div>
  );
};

export default Border;
