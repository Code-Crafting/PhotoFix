import { useContext, useEffect, useRef, useState } from "react";
import { useDebouncer } from "../../hooks/useDebouncer";
import InputField from "../InputField";
import { ImageContext } from "../../context/ImageContext";
import InputLabel from "../InputLabel";
import { aspectRatios } from "../../constants/AspectRatios";
import MultipleOptions from "../MultipleOptions";

const Crop = () => {
  const [queries, setQueries] = useState({
    width: 0,
    height: 0,
  });
  const [selectedRatio, setSelectedRatio] = useState(0);
  const debouncedWidth = useDebouncer(queries.width);
  const debouncedHeight = useDebouncer(queries.height);
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);

  const handleRatio = (id) => {
    if (queries.height) {
      alert("Either choose Width and Height or Width and Aspect Ratio");
      return;
    }
    setSelectedRatio(id);
  };

  useEffect(() => {
    if (!imageUrl) return;

    let ratio;
    let params = [];
    let transformationCode = "";

    if (selectedRatio > 0) {
      ratio = aspectRatios
        .filter((el) => el.id === selectedRatio)[0]
        .value.split(":")
        .join("-");
    }

    if (debouncedWidth) {
      params.push(`w-${debouncedWidth}`);
    }

    if (debouncedHeight) {
      params.push(`h-${debouncedHeight}`);
    }

    if (ratio) {
      params.push(`ar-${ratio}`);
    }

    if (params.length > 0) {
      transformationCode = `/tr:${params.join(",")}`;
    }

    // const transformationCode =
    //   !debouncedWidth && !debouncedHeight && !ratio
    //     ? ""
    //     : debouncedWidth && !debouncedHeight && !ratio
    //     ? `/tr:w-${debouncedWidth}`
    //     : debouncedWidth && !debouncedHeight && ratio
    //     ? `/tr:w-${debouncedWidth},ar-${ratio}`
    //     : debouncedHeight && !debouncedWidth
    //     ? `/tr:h-${debouncedHeight}`
    //     : !debouncedWidth && !debouncedHeight && ratio
    //     ? `/tr:ar-${ratio}`
    //     : `/tr:w-${debouncedWidth},h-${debouncedHeight}`;

    setCustomImageUrl(`${imageUrl}${transformationCode}`);
    // console.log(transformationCode);
  }, [debouncedWidth, debouncedHeight, selectedRatio]);

  return (
    <>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="width" title="Width" />
        <InputField
          id="width"
          type="number"
          onChange={(e) =>
            setQueries((prev) => ({ ...prev, width: Number(e.target.value) }))
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="height" title="Height" />
        <InputField
          id="height"
          type="number"
          onChange={(e) => {
            setQueries((prev) => ({ ...prev, height: Number(e.target.value) }));
            setSelectedRatio(0);
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="ratio" title="Aspect Ratio" />
        <div className="flex gap-2 flex-wrap">
          {aspectRatios.map((ratio) => (
            <MultipleOptions
              key={ratio.id}
              id={ratio.id}
              title={ratio.value}
              fn={() => handleRatio(ratio.id)}
              selectedOption={selectedRatio}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Crop;
