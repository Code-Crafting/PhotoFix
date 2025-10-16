import { useContext, useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import InputField from "../../../ui/InputField";
import { ImageContext } from "../../../context/ImageContext";
import InputLabel from "../../../ui/InputLabel";
import { aspectRatios } from "../../../constants/AspectRatios";
import MultipleOptions from "../../../ui/MultipleOptions";
import { ShowModal } from "../../../context/ShowModal";
import Modal from "../../../components/Modal";
import Alert from "../../../ui/Alert";

const Crop = () => {
  const [queries, setQueries] = useState({
    width: 0,
    height: 0,
  });
  const [selectedRatio, setSelectedRatio] = useState(0);
  const debouncedWidth = useDebounce(queries.width);
  const debouncedHeight = useDebounce(queries.height);
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);
  const [showModal, setShowModal] = useState(false);

  const handleRatio = (id) => {
    if (queries.height) {
      setShowModal(true);
      return;
    }
    setSelectedRatio(id);
  };

  const handleCrop = () => {
    if (!imageUrl.url) return;

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

    setCustomImageUrl(`${imageUrl.url}${transformationCode}`);
    // console.log(transformationCode);
  };

  useEffect(() => {
    handleCrop();
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
      <Modal closeFnc={() => setShowModal(false)} showModal={showModal}>
        <Alert message="Either choose Width and Height or Width and Aspect Ratio." />
      </Modal>
    </>
  );
};

export default Crop;
