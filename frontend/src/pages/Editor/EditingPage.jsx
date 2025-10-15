import { useState, lazy, useEffect } from "react";
import { editingTools } from "../../constants/EditingTools";
import Button from "../../ui/Button";
import Crop from "./components/Crop";
import { ImageContext } from "../../context/ImageContext";
import ImageUpload from "../../components/ImageUpload";
import { TiTick } from "react-icons/ti";
import ImageLoading from "../../components/ImageLoading";
const AddText = lazy(() => import("./components/AddText"));
const Shadow = lazy(() => import("./components/Shadow"));
const Gradient = lazy(() => import("./components/Gradient"));
const Border = lazy(() => import("./components/Border"));
const Rotate = lazy(() => import("./components/Rotate"));
const BgRemove = lazy(() => import("./components/BgRemove"));

const EditingPage = () => {
  const [elId, setElId] = useState(1);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState({ name: "", url: "" });
  const [customImageUrl, setCustomImageUrl] = useState(imageUrl.url);

  // console.log(progress);

  const components = {
    1: <Crop />,
    2: <AddText />,
    3: <Shadow />,
    4: <Gradient />,
    5: <Border />,
    6: <Rotate />,
  };

  const handleDeleteBtn = () => {
    setImageUrl({ name: "", url: "" });
    setProgress(0);
  };

  useEffect(() => {
    setCustomImageUrl(imageUrl.url);
  }, [imageUrl.url]);

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
      <div className="w-1/2 bg-secondary-dark min-h-[500px] rounded-xl px-2 py-4 grid place-items-center relative">
        {progress === 0 ? (
          <ImageUpload
            // setPreviousWork={setPreviousWork}
            setImageUrl={setImageUrl}
            setProgress={setProgress}
          />
        ) : (progress < 100 && progress > 0) || !customImageUrl ? (
          <ImageLoading />
        ) : (
          <div className="">
            <img src={customImageUrl} alt="image" className="max-w-[500px]" />
          </div>
        )}
      </div>

      {/* required fields */}
      <div className="w-1/4 text-textPrimary features-gradient p-4 rounded-lg shadow-header space-y-3">
        <div className="flex gap-2 justify-end">
          <Button
            text="Delete"
            customStyle="w-[100px] py-1 bg-red-500"
            fn={handleDeleteBtn}
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
