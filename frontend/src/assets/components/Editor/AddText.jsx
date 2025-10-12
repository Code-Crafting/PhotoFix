import ColorPicker from "../ColorPicker";
import InputField from "../InputField";

const AddText = () => {
  // const colorRef = useRef(null);

  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar ">
      <InputField label="Text" type="text" />
      <InputField label="Font Size" type="number" />

      <ColorPicker title="Background Color" />
      <ColorPicker title="Text Color" />

      <InputField label="Padding-X (px)" type="number" />
      <InputField label="Padding-Y (px)" type="number" />
    </div>
  );
};

export default AddText;
