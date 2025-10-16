import { useContext, useEffect, useState } from "react";
import { gradientDirections } from "../../../constants/GradientDirections";
import ColorPicker from "../../../ui/ColorPicker";
import Checkbox from "../../../ui/Checkbox";
import InputLabel from "../../../ui/InputLabel";
import InputField from "../../../ui/InputField";
import { ImageContext } from "../../../context/ImageContext";
import MultipleOptions from "../../../ui/MultipleOptions";
import { useDebounce } from "../../../hooks/useDebounce";
import { removeHastagFormColorCode } from "../../../lib/removeHastagFromColorCode";

const Gradient = () => {
  const [imageUrl, setCustomImageUrl, Icon] = useContext(ImageContext);
  const [defaultValues, setdefaultValues] = useState({
    width: "",
    selectedGradient: 1,
    fromColor: "#FFFFFF",
    toColor: "#00000000",
  });
  const [isSelected, setIsSelected] = useState(false);

  const width = useDebounce(defaultValues.width);
  const formColor = useDebounce(defaultValues.fromColor, 2000);
  const toColor = useDebounce(defaultValues.toColor, 2000);

  const handleCheckbox = () => {
    if (!imageUrl.url) {
      return alert("First select a PNG");
    }

    const isPng = imageUrl.url.includes("png");
    if (isPng) {
      setIsSelected(!isSelected);
    } else {
      return alert("First select a PNG");
    }
  };

  const handleGradient = () => {
    if (!imageUrl.url) return;
    let params = [];
    const direction = gradientDirections.filter(
      ({ id }) => defaultValues.selectedGradient === id
    )[0].value;

    params.push(`ld-${direction}`);

    if (formColor) {
      const fromColorCode = removeHastagFormColorCode(formColor);
      params.push(`from-${fromColorCode}`);
    }

    if (toColor) {
      const toColorCode = removeHastagFormColorCode(toColor);
      params.push(`to-${toColorCode}`);
    }

    const customUrl = isSelected
      ? `${imageUrl.url}/tr:e-gradient-${params.join("_")}:l-image,i-${
          imageUrl.name
        },t-false,l-end${width ? `:w-${width}` : ""}`
      : `${imageUrl.url}/tr:${
          width ? `w-${width},` : ""
        }e-gradient-${params.join("_")}`;

    // console.log(customUrl);

    setCustomImageUrl(customUrl);
  };

  useEffect(() => {
    handleGradient();

    return;
  }, [width, formColor, toColor, defaultValues.selectedGradient, isSelected]);

  return (
    <>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="width" title="Width" />
        <InputField
          id="width"
          type="number"
          onChange={(e) =>
            setdefaultValues((prev) => ({ ...prev, width: e.target.value }))
          }
        />
      </div>

      <div>
        <p className="text-textPrimary text-lg">Directions</p>
        <div className="flex flex-wrap gap-2">
          {gradientDirections.map((el) => {
            const { id, direction } = el;
            return (
              <MultipleOptions
                key={id}
                id={id}
                title={direction}
                fn={() =>
                  setdefaultValues((prev) => ({
                    ...prev,
                    selectedGradient: id,
                  }))
                }
                selectedOption={defaultValues.selectedGradient}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-1">
        <InputLabel htmlFor="formColor" title="From Color" />
        <ColorPicker
          id="formColor"
          setterFnc={(e) =>
            setdefaultValues((prev) => ({ ...prev, fromColor: e.target.value }))
          }
        />
      </div>

      <div className="flex items-center gap-1">
        <InputLabel htmlFor="toColor" title="To Color" />
        <ColorPicker
          id="toColor"
          setterFnc={(e) =>
            setdefaultValues((prev) => ({ ...prev, toColor: e.target.value }))
          }
        />
      </div>

      <Checkbox
        title="Gradient as background (only on PNG)"
        setterFnc={() => handleCheckbox()}
        icon={isSelected && <Icon />}
      />
    </>
  );
};

export default Gradient;
