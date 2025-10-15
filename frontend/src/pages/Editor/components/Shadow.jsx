import { useContext, useEffect, useState } from "react";
import RangeInput from "../../../ui/RangeInput";
import { useDebounce } from "../../../hooks/useDebounce";
import { ImageContext } from "../../../context/ImageContext";
import CheckBox from "../../../ui/Checkbox";

const Shadow = () => {
  const [defaultValues, setDefaultValues] = useState({
    blur: "10",
    saturation: "30",
    offsetX: "2",
    offsetY: "2",
  });

  const [isInverted, setIsInverted] = useState({
    offsetX: false,
    offsetY: false,
  });

  const [imageUrl, setCustomImageUrl, Icon] = useContext(ImageContext);

  const blur = useDebounce(defaultValues.blur);
  const saturation = useDebounce(defaultValues.saturation);
  const offsetX = useDebounce(defaultValues.offsetX);
  const offsetY = useDebounce(defaultValues.offsetY);

  const handleShadow = () => {
    const isPng = imageUrl.name.includes("png");
    if (!isPng) {
      alert("Select a PNG");
      imageUrl.url = "";
    }

    const params = [];

    if (blur) params.push(`bl-${blur}`);

    if (saturation) params.push(`st-${saturation}`);

    if (offsetX) params.push(`x-${isInverted.offsetX ? "N" : ""}${offsetX}`);

    if (offsetY) params.push(`y-${isInverted.offsetY ? "N" : ""}${offsetY}`);

    setCustomImageUrl(`${imageUrl.url}/tr:e-shadow-${params.join("_")}`);
  };

  useEffect(() => {
    handleShadow();
  }, [
    blur,
    saturation,
    offsetX,
    offsetY,
    isInverted.offsetX,
    isInverted.offsetY,
  ]);

  return (
    <div className="pr-2 space-y-3 overflow-y-scroll scrollbar">
      <p className="my-2 text-textPrimary/50 font-semibold">
        {" "}
        Note: Works only on .png
      </p>
      <RangeInput
        title="Blur"
        defaultValue={defaultValues.blur}
        setterFnc={(e) =>
          setDefaultValues((prev) => ({
            ...prev,
            blur: e.target.value,
          }))
        }
        min={0}
        max={15}
      />

      {/* staturation */}
      <RangeInput
        title="Saturation"
        defaultValue={defaultValues.saturation}
        setterFnc={(e) =>
          setDefaultValues((prev) => ({
            ...prev,
            saturation: e.target.value,
          }))
        }
        min={0}
        max={100}
      />

      {/* X Offset */}
      <RangeInput
        title="Offset-X"
        defaultValue={defaultValues.offsetX}
        setterFnc={(e) =>
          setDefaultValues((prev) => ({
            ...prev,
            offsetX: e.target.value,
          }))
        }
        min={0}
        max={100}
      />

      {/* Y Offset */}
      <RangeInput
        title="Offset-Y"
        defaultValue={defaultValues.offsetY}
        setterFnc={(e) =>
          setDefaultValues((prev) => ({
            ...prev,
            offsetY: e.target.value,
          }))
        }
        min={0}
        max={100}
      />

      {/* invert offeset-x */}
      <CheckBox
        title="Invert Offeset-X"
        icon={isInverted.offsetX && <Icon />}
        setterFnc={() =>
          setIsInverted((prev) => ({ ...prev, offsetX: !prev.offsetX }))
        }
      />

      {/* invert offeset-y */}
      <CheckBox
        title="Invert Offeset-Y"
        icon={isInverted.offsetY && <Icon />}
        setterFnc={() =>
          setIsInverted((prev) => ({ ...prev, offsetY: !prev.offsetY }))
        }
      />
    </div>
  );
};

export default Shadow;
