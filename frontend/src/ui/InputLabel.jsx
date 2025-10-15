const InputLabel = ({ htmlFor, title }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-textPrimary text-lg cursor-pointer"
    >
      {title}
    </label>
  );
};

export default InputLabel;
