import { useState } from "react";
import Checkbox from "../Checkbox";
import InputField from "../InputField";
import { TiTick } from "react-icons/ti";

const Rotate = () => {
  const [isClockWise, setIsClockWise] = useState(true);
  console.log(isClockWise);
  return (
    <>
      <InputField label="Degree" type="number" />

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
