import InputLabel from "./InputLabel";

const RangeInput = ({ title, defaultValue, setterFnc, min, max }) => {
  return (
    <div>
      <InputLabel title={title} />
      <input
        type="range"
        min={min}
        max={max}
        value={defaultValue}
        onChange={(e) => setterFnc(e.target.value)}
        className="w-full h-2 bg-primary-dark rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between">
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  );
};

export default RangeInput;
