import InputField from "../../../ui/InputField";
import ColorPicker from "../../../ui/ColorPicker";
import InputLabel from "../../../ui/InputLabel";
import { useContext, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { ImageContext } from "../../../context/ImageContext";
import { removeHastagFormColorCode } from "../../../lib/removeHastagFromColorCode";

const Border = () => {
  const [defaultValues, setDefaultValues] = useState({
    width: "",
    height: "",
    borderWidth: "20",
    color: "#000000",
  });
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);

  const width = useDebounce(defaultValues.width);
  const height = useDebounce(defaultValues.height);
  const borderWidth = useDebounce(defaultValues.borderWidth);
  const color = useDebounce(defaultValues.color, 2000);

  const handleBorder = () => {
    if (!imageUrl.url) return;
    const params = [];
    if (borderWidth) {
      params.push(`b-${borderWidth}`);
    } else {
      params.push("b-20");
    }

    if (color) {
      const colorCode = removeHastagFormColorCode(color);
      params.push(colorCode);
    }

    const w = width ? `w-${width},` : "";
    const h = height ? `h-${height},` : "";

    setCustomImageUrl(`${imageUrl.url}/tr:${w}${h}${params.join("_")}`);
    // console.log(`/tr:${w}${h}${params.join("_")}`);
  };

  useEffect(() => {
    handleBorder();
  }, [width, height, borderWidth, color]);

  return (
    <>
      {/* width */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="width" title="Width" />
        <InputField
          id="width"
          type="number"
          onChange={(e) =>
            setDefaultValues((prev) => ({ ...prev, width: e.target.value }))
          }
        />
      </div>

      {/* height */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="height" title="Height" />
        <InputField
          id="height"
          type="number"
          onChange={(e) =>
            setDefaultValues((prev) => ({ ...prev, height: e.target.value }))
          }
        />
      </div>

      {/* border width */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="borderWidth" title="Border Width" />
        <InputField
          id="borderWidth"
          type="number"
          onChange={(e) =>
            setDefaultValues((prev) => ({
              ...prev,
              borderWidth: e.target.value,
            }))
          }
        />
      </div>

      {/* color */}
      <div className="flex gap-1 items-center">
        <InputLabel htmlFor="color" title="Border Color" />
        <ColorPicker
          id="color"
          setterFnc={(e) =>
            setDefaultValues((prev) => ({ ...prev, color: e.target.value }))
          }
        />
      </div>
    </>
  );
};

export default Border;
