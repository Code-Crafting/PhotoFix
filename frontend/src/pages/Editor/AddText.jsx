import { useContext, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import ColorPicker from "../../ui/ColorPicker";
import InputField from "../../ui/InputField";
import InputLabel from "../../ui/InputLabel";
import { ImageContext } from "../../context/ImageContext";

const AddText = () => {
  // const colorRef = useRef(null);
  const [initialText, setInitialText] = useState("");
  const deboundeText = useDebounce(initialText);
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);

  useEffect(() => {
    const hasSpecialChars = /[^a-zA-Z0-9\s]/.test(deboundeText);
    console.log(hasSpecialChars);
  }, [deboundeText]);

  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar ">
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Text" />
        <InputField
          id="text"
          type="text"
          onChange={(e) => setInitialText(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="forntSize" title="Font Size" />
        <InputField id="forntSize" type="text" />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="positionX" title="Position-X (%)" />
        <InputField id="positionX" type="number" />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="positionY" title="Position-Y (%)" />
        <InputField id="positionY" type="number" />
      </div>

      <ColorPicker title="Background Color" />
      <ColorPicker title="Text Color" />
    </div>
  );
};

export default AddText;
