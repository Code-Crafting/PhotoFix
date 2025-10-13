import ColorPicker from "../ColorPicker";
import InputField from "../InputField";
import InputLabel from "../InputLabel";

const AddText = () => {
  // const colorRef = useRef(null);

  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar ">
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Text" />
        <InputField id="text" type="text" />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="forntSize" title="Font Size" />
        <InputField id="forntSize" type="text" />
      </div>

      <ColorPicker title="Background Color" />
      <ColorPicker title="Text Color" />

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="paddingX" title="Padding-X (px)" />
        <InputField id="paddingX" type="number" />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="paddingY" title="Padding-Y (px)" />
        <InputField id="paddingY" type="number" />
      </div>
    </div>
  );
};

export default AddText;
