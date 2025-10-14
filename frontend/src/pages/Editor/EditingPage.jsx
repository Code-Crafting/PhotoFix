import { useState, lazy, useContext, useEffect } from "react";
import { editingTools } from "../../constants/EditingTools";
import Button from "../../ui/Button";
import Crop from "./Crop";
import { ImageContext } from "../../context/ImageContext";
import ImageUpload from "../../components/ImageUpload";
import { TiTick } from "react-icons/ti";
const AddText = lazy(() => import("./AddText"));
const Shadow = lazy(() => import("./Shadow"));
const Gradient = lazy(() => import("./Gradient"));
const Border = lazy(() => import("./Border"));
const Rotate = lazy(() => import("./Rotate"));

const EditingPage = () => {
  const [elId, setElId] = useState(1);
  // const [previousWork, setPreviousWork] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [customImageUrl, setCustomImageUrl] = useState(imageUrl);

  const components = {
    1: <Crop />,
    2: <AddText />,
    3: <Shadow />,
    4: <Gradient />,
    5: <Border />,
    6: <Rotate />,
  };

  useEffect(() => {
    setCustomImageUrl(imageUrl);
  }, [imageUrl]);

  return (
    <div className="flex w-full items-center gap-4">
      {/* editing tools */}
      <div className="space-y-3 px-2 py-4 w-1/4">
        {editingTools.map((el) => {
          const { id, title, icon: Icon } = el;
          return (
            <div
              key={id}
              className={`text-textPrimary flex gap-2 items-center features-gradient px-4 py-2 rounded-full hover:cursor-pointer w-max`}
              onClick={() => setElId(id)}
            >
              <Icon className="text-2xl" onClick={() => setElId(id)} />
              {id === elId && <p className={`text-lg`}>{title}</p>}
            </div>
          );
        })}
      </div>

      {/* image */}
      <div className="w-1/2 bg-secondary-dark min-h-[500px] rounded-xl px-2 py-4 grid place-items-center">
        {!customImageUrl ? (
          <ImageUpload
            // setPreviousWork={setPreviousWork}
            setImageUrl={setImageUrl}
          />
        ) : (
          <img src={customImageUrl} alt="image" className="max-w-[500px]" />
        )}
      </div>

      {/* required fields */}
      <div className="w-1/4 text-textPrimary features-gradient p-4 rounded-lg shadow-header space-y-3">
        <div className="flex gap-2 justify-end">
          <Button
            text="Delete"
            customStyle="w-[100px] py-1 bg-red-500"
            fn={() => setImageUrl("")}
          />
          <Button text="Export" customStyle="w-[100px] py-1 button-gradient" />
        </div>

        <ImageContext.Provider value={[imageUrl, setCustomImageUrl, TiTick]}>
          <div className="h-[300px] flex justify-center flex-col gap-4">
            {components[elId]}
          </div>
        </ImageContext.Provider>

        {/* <Button text="Apply" customStyle="py-2 mt-8 bg-[#643b32]" /> */}
      </div>
    </div>
  );
};

export default EditingPage;
