import { useState } from "react";
import { gradientDirections } from "../../constants/GradientDirections";
import ColorPicker from "../ColorPicker";
import MultipleOptions from "../MultipleOptions";

const Gradient = () => {
  const [selectedGradient, setSelectedGradient] = useState(1);
  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar">
      <p className="text-textPrimary text-lg">Directions</p>
      <div className="flex flex-wrap gap-2">
        {gradientDirections.map((el) => {
          const { id, direction } = el;
          return (
            <MultipleOptions
              key={id}
              id={id}
              title={direction}
              fn={() => setSelectedGradient(id)}
              selectedOption={selectedGradient}
            />
          );
        })}
      </div>

      <ColorPicker title="From Color" />
      <ColorPicker title="To Color" />
    </div>
  );
};

export default Gradient;
