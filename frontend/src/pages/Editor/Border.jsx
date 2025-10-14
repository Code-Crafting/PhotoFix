import React from "react";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";
import InputLabel from "../../ui/InputLabel";

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
