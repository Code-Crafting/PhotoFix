const ColorPicker = ({ id = "color", setterFnc }) => {
  return (
    <input
      type="color"
      id={id}
      className="cursor-pointer"
      onChange={setterFnc}
    />
  );
};

export default ColorPicker;
