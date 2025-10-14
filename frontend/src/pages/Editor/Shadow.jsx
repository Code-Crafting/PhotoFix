import { useState } from "react";
import RangeInput from "../../ui/RangeInput";

const Shadow = () => {
  const [blur, setBlur] = useState(10);
  const [saturation, setSaturation] = useState(30);
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);

  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar">
      <RangeInput
        title="Blur"
        defaultValue={blur}
        setterFnc={(e) => setBlur(e.target.value)}
        min={0}
        max={15}
      />

      {/* staturation */}
      <RangeInput
        title="Saturation"
        defaultValue={saturation}
        setterFnc={(e) => setSaturation(e.target.value)}
        min={0}
        max={100}
      />

      {/* X Offset */}
      <RangeInput
        title="Offset-X"
        defaultValue={offsetX}
        setterFnc={(e) => setOffsetX(e.target.value)}
        min={0}
        max={100}
      />

      {/* Y Offset */}
      <RangeInput
        title="Offset-Y"
        defaultValue={offsetY}
        setterFnc={(e) => setOffsetY(e.target.value)}
        min={0}
        max={100}
      />
    </div>
  );
};

export default Shadow;
