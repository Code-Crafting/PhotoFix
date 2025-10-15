import { useContext, useEffect, useState } from "react";
import Checkbox from "../../../ui/Checkbox";
import RangeInput from "../../../ui/RangeInput";
import { useDebounce } from "../../../hooks/useDebounce";
import InputLabel from "../../../ui/InputLabel";
import InputField from "../../../ui/InputField";
import { ImageContext } from "../../../context/ImageContext";

const Rotate = () => {
  const [defaultValues, setDefaultValues] = useState({
    isClockWise: true,
    degree: "90",
    width: "",
    height: "",
  });
  const [imageUrl, setCustomImageUrl, Icon] = useContext(ImageContext);
  const degree = useDebounce(defaultValues.degree);
  const width = useDebounce(defaultValues.width);
  const height = useDebounce(defaultValues.height);

  const handleDegree = () => {
    if (!imageUrl.url) return;
    let params;
    if (degree)
      params = `rt-${defaultValues.isClockWise ? `${degree}` : `N${degree}`}`;

    const w = width ? `w-${width},` : "";
    const h = height ? `h-${height},` : "";

    setCustomImageUrl(`${imageUrl.url}/tr:${w}${h}${params}`);
    // console.log(`/tr:${w}${h}${params}`);
  };

  useEffect(() => {
    handleDegree();
  }, [degree, width, height, defaultValues.isClockWise]);

  return (
    <div className="space-y-3">
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
      <RangeInput
        title="Degree"
        defaultValue={defaultValues.degree}
        min={0}
        max={360}
        setterFnc={(e) =>
          setDefaultValues((prev) => ({ ...prev, degree: e.target.value }))
        }
      />

      <div>
        <Checkbox
          title="Clockwise"
          icon={defaultValues.isClockWise && <Icon />}
          setterFnc={() =>
            setDefaultValues((prev) => ({
              ...prev,
              isClockWise: !prev.isClockWise,
            }))
          }
        />
        <Checkbox
          title="Counter-clockwise"
          icon={!defaultValues.isClockWise && <Icon />}
          setterFnc={() =>
            setDefaultValues((prev) => ({
              ...prev,
              isClockWise: !prev.isClockWise,
            }))
          }
        />
      </div>
    </div>
  );
};

export default Rotate;
