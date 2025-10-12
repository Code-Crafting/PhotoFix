import InputField from "../InputField";

const Crop = () => {
  return (
    <>
      <InputField label="Width" type="number" />

      <InputField label="Height" type="number" />

      <div className="flex flex-col ">
        <label> Aspect Ratio </label>
        <div className="flex gap-2 items-center mt-2">
          <input
            type="number"
            className="bg-primary-dark  outline-none p-2 rounded-lg w-1/3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="text-2xl">:</p>
          <input
            type="number"
            className="bg-primary-dark  outline-none p-2 rounded-lg w-1/3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
    </>
  );
};

export default Crop;
