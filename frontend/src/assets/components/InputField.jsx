const InputField = ({ id, type, onChange, customStyle }) => {
  return (
    <input
      type={type}
      id={id}
      className={`bg-primary-dark  outline-none p-2 rounded-lg ${customStyle} ${
        type === "number" &&
        "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      }`}
      onChange={onChange}
    />
  );
};

export default InputField;
