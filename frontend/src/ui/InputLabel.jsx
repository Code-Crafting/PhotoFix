const InputLabel = ({ htmlFor, title }) => {
  return (
    <label htmlFor={htmlFor} className="text-textPrimary text-lg">
      {title}
    </label>
  );
};

export default InputLabel;
