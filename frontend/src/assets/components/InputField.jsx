const InputField = ({ label, type, isVertical = false }) => {
  return (
    <div className={`flex ${isVertical === true ? "" : "flex-col"} gap-1`}>
      <label htmlFor={label} className=" text-textPrimary text-lg">
        {" "}
        {label}{" "}
      </label>
      <input
        type={type}
        id={label}
        className={`bg-primary-dark  outline-none p-2 rounded-lg ${
          type === "number" &&
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        }`}
      />
    </div>
  );
};

export default InputField;
