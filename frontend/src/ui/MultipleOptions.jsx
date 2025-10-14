const MultipleOptions = ({ id, title, fn, selectedOption }) => {
  return (
    <div
      onClick={fn}
      className={`shadow-header ${
        selectedOption === id ? "bg-primary-dark/70" : "bg-primary-dark"
      }  text-textPrimary/50 px-2 py-1 rounded-lg hover:cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default MultipleOptions;
