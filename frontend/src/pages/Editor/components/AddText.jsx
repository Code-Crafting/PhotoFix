import { useContext, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import ColorPicker from "../../../ui/ColorPicker";
import InputField from "../../../ui/InputField";
import InputLabel from "../../../ui/InputLabel";
import RangeInput from "../../../ui/RangeInput";
import { ImageContext } from "../../../context/ImageContext";
import { hasSpecialChar } from "../../../lib/checkSpecialChar";
import Checkbox from "../../../ui/Checkbox";
import { removeHastagFormColorCode } from "../../../lib/removeHastagFromColorCode";

const AddText = () => {
  // all initial values
  const [initialValues, setInitialVlaues] = useState({
    text: "",
    fontSize: "250",
    positionX: "10",
    positionY: "10",
    bgColor: "",
    textColor: "",
    width: "",
    padding: "",
  });

  // checking whether user wants to add bg or text color
  const [isSelected, setIsSelected] = useState({
    bgColor: false,
    textColor: false,
  });

  // tracking colors
  const [colors, setColors] = useState({
    bgColor: "",
    textColor: "",
  });

  const text = useDebounce(initialValues.text);
  const positionX = useDebounce(initialValues.positionX);
  const positionY = useDebounce(initialValues.positionY);
  const fontSize = useDebounce(initialValues.fontSize);
  const width = useDebounce(initialValues.width);
  const padding = useDebounce(initialValues.padding);

  const [imageUrl, setCustomImageUrl, Icon] = useContext(ImageContext);

  // checking whether user wants to ad bg/text color
  const handleCheckbox = (checkBoxName) => {
    if (checkBoxName === "bgColor") {
      setIsSelected((prev) => ({ ...prev, bgColor: !prev.bgColor }));
    }

    if (checkBoxName === "textColor") {
      setIsSelected((prev) => ({ ...prev, textColor: !prev.textColor }));
    }
  };

  // whole text editing
  const handleText = () => {
    if (!imageUrl.url || !text) return;

    const hasSpecialChars = hasSpecialChar(text);
    let params = [];

    // text
    if (hasSpecialChars) {
      const encodedText = encodeURIComponent(btoa(text));
      params.push(`ie-${encodedText}`);
    } else {
      // const spaceRemovedText = text.split(" ").join("%");
      params.push(`i-${text}`);
    }

    // font size
    if (fontSize) {
      params.push(`fs-${fontSize}`);
    }

    // positon-x
    if (positionX) {
      params.push(`lx-bw_mul_${positionX / 100}`);
    }

    // positon-Y
    if (positionY) {
      params.push(`ly-bh_mul_${positionY / 100}`);
    }

    // bg color
    if (initialValues.bgColor) {
      const colorCode = removeHastagFormColorCode(initialValues.bgColor);
      params.push(`bg-${colorCode}`);
    }

    // text color
    if (initialValues.textColor) {
      const colorCode = removeHastagFormColorCode(initialValues.textColor);
      params.push(`co-${colorCode}`);
    }

    // width
    if (width) {
      params.push(`w-${width}`);
    }

    // padding
    if (padding) {
      params.push(`pa-${padding}`);
    }

    console.log(imageUrl.url);

    setCustomImageUrl(`${imageUrl.url}/tr:l-text,${params.join(",")},l-end`);
    // console.log(`/tr:l-text,${params.join(",")},l-end`);
  };

  useEffect(() => {
    handleText();
  }, [
    text,
    positionX,
    positionY,
    fontSize,
    initialValues.bgColor,
    initialValues.textColor,
    width,
    padding,
  ]);

  // setting final color code
  useEffect(() => {
    if (isSelected.bgColor) {
      setInitialVlaues((prev) => ({
        ...prev,
        bgColor: colors.bgColor ? colors.bgColor : "#080808",
      }));
    } else {
      setInitialVlaues((prev) => ({
        ...prev,
        bgColor: "",
      }));
    }

    if (isSelected.textColor) {
      setInitialVlaues((prev) => ({
        ...prev,
        textColor: colors.textColor ? colors.textColor : "#080808",
      }));
    } else {
      setInitialVlaues((prev) => ({
        ...prev,
        textColor: "",
      }));
    }
  }, [isSelected.bgColor, isSelected.textColor]);

  return (
    <>
      {/* text field */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Text" />
        <InputField
          id="text"
          type="text"
          onChange={(e) =>
            setInitialVlaues((prev) => ({ ...prev, text: e.target.value }))
          }
        />
      </div>

      {/* font size */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Font Size" />
        <InputField
          id="text"
          type="text"
          onChange={(e) =>
            setInitialVlaues((prev) => ({ ...prev, fontSize: e.target.value }))
          }
        />
      </div>

      {/* position-x */}
      <RangeInput
        title="Position-X (%)"
        defaultValue={initialValues.positionX}
        min={0}
        max={100}
        setterFnc={(e) =>
          setInitialVlaues((prev) => ({ ...prev, positionX: e.target.value }))
        }
      />

      {/* position-y */}
      <RangeInput
        title="Position-Y (%)"
        defaultValue={initialValues.positionY}
        min={0}
        max={100}
        setterFnc={(e) =>
          setInitialVlaues((prev) => ({ ...prev, positionY: e.target.value }))
        }
      />

      {/* bg-color */}
      <div className="flex items-center gap-1">
        <Checkbox
          title="Background Color"
          icon={isSelected.bgColor && <Icon />}
          setterFnc={() => handleCheckbox("bgColor")}
        />
        <ColorPicker
          setterFnc={(e) => {
            setColors((prev) => ({ ...prev, bgColor: e.target.value }));
            setIsSelected((prev) => ({ ...prev, bgColor: false }));
          }}
        />
      </div>

      {/* text-color */}
      <div className="flex items-center gap-1">
        <Checkbox
          title="Text Color"
          icon={isSelected.textColor && <Icon />}
          setterFnc={() => handleCheckbox("textColor")}
        />
        <ColorPicker
          setterFnc={(e) => {
            setColors((prev) => ({ ...prev, textColor: e.target.value }));
            setIsSelected((prev) => ({ ...prev, textColor: false }));
          }}
        />
      </div>

      {/* width */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Width" />
        <InputField
          id="text"
          type="text"
          onChange={(e) =>
            setInitialVlaues((prev) => ({ ...prev, width: e.target.value }))
          }
        />
      </div>

      {/* padding */}
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="text" title="Padding" />
        <InputField
          id="text"
          type="text"
          onChange={(e) =>
            setInitialVlaues((prev) => ({ ...prev, padding: e.target.value }))
          }
        />
      </div>
    </>
  );
};

export default AddText;
