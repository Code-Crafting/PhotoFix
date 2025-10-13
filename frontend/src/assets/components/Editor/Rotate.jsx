import { useState } from "react";
import Checkbox from "../Checkbox";
import InputField from "../InputField";
import { TiTick } from "react-icons/ti";
import InputLabel from "../InputLabel";

const Rotate = () => {
  const [isClockWise, setIsClockWise] = useState(true);
  return (
    <>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="degree" title="Degree" />
        <InputField id="degree" type="number" />
      </div>

      <Checkbox
        title="Clockwise"
        icon={isClockWise && <TiTick />}
        setterFnc={setIsClockWise}
      />
      <Checkbox
        title="Counter-clockwise"
        icon={!isClockWise && <TiTick />}
        setterFnc={setIsClockWise}
      />
    </>
  );
};

export default Rotate;
