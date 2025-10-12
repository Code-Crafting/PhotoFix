import { useState } from "react";
import { gradientDirections } from "../../constants/GradientDirections";
import ColorPicker from "../ColorPicker";

const Gradient = () => {
  const [selectedGradient, setSelectedGradient] = useState("top");
  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar">
      <p className="text-textPrimary text-lg">Directions</p>
      <div className="flex flex-wrap gap-2">
        {gradientDirections.map((el) => {
          const { id, direction, value } = el;
          return (
            <div
              key={id}
              onClick={() => setSelectedGradient(value)}
              className={`shadow-header ${
                selectedGradient === value
                  ? "bg-primary-dark/70"
                  : "bg-primary-dark"
              }  text-textPrimary/50 px-2 py-1 rounded-lg hover:cursor-pointer`}
            >
              {direction}
            </div>
          );
        })}
      </div>

      <ColorPicker title="From Color" />
      <ColorPicker title="To Color" />
    </div>
  );
};

export default Gradient;
