import { useState, lazy, useEffect, Suspense, useContext } from "react";
import { editingTools } from "../../constants/editingTools";
import Button from "../../ui/Button";
import Crop from "./components/Crop";
import { ImageContext } from "../../context/ImageContext";
import ImageUpload from "../../components/ImageUpload";
import { TiTick } from "react-icons/ti";
import Loading from "../../components/Loading";
import Tools from "../../ui/Tools";
const AddText = lazy(() => import("./components/AddText"));
const Shadow = lazy(() => import("./components/Shadow"));
const Gradient = lazy(() => import("./components/Gradient"));
const Border = lazy(() => import("./components/Border"));
const Rotate = lazy(() => import("./components/Rotate"));
import { PiMagicWandBold } from "react-icons/pi";
import { Link } from "react-router";
import Modal from "../../components/Modal";
import Alert from "../../ui/Alert";
import { useExport } from "../../hooks/useExport";
import { Theme } from "../../context/Theme";
const BgRemove = lazy(() => import("./components/BgRemove"));

const EditingPage = () => {
  const [elId, setElId] = useState(1);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState({ name: "", url: "" });
  const [customImageUrl, setCustomImageUrl] = useState(imageUrl.url);
  const [handleExport, showModal, errorMsg, isExporting, setShowModal] =
    useExport();
  const [isLight] = useContext(Theme);

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
    // console.log("image updated");
  }, [imageUrl.url]);

  return (
    <div className="w-full lg:block hidden">
      <div className="flex justify-center gap-4 mb-12">
        {editingTools.map((el) => {
          const { id, title, icon: Icon } = el;
          return (
            <Tools
              key={id}
              id={id}
              elId={elId}
              title={title}
              icon={Icon}
              setterFrn={() => setElId(id)}
            />
          );
        })}
        <Link to="/pricing">
          <Tools title="AI Tools" id={7} icon={PiMagicWandBold} />
        </Link>
      </div>

      <div className="flex justify-center items-center  gap-4">
        {/* image */}
        <div
          className={`w-1/2 ${
            isLight ? "bg-editorCard" : "bg-secondary-dark"
          } min-h-[500px] rounded-xl px-2 py-4 grid place-items-center relative`}
        >
          {!progress ? (
            <ImageUpload
              setImageUrl={setImageUrl}
              setProgress={setProgress}
              isLight={isLight}
            />
          ) : progress > 0 && !customImageUrl ? (
            <Loading />
          ) : (
            <div className="">
              <img src={customImageUrl} alt="image" className="max-w-[500px]" />
            </div>
          )}
        </div>

        {/* required fields */}
        <div
          className={`w-1/3 h-[500px] ${
            isLight ? "bg-editorCard" : "features-gradient"
          } p-4 rounded-lg space-y-3`}
        >
          <div className="flex gap-2 justify-end">
            {imageUrl.url && (
              <Button
                text="Delete"
                customStyle="w-max px-8 py-2 bg-red-500 font-semibold"
                fn={handleDeleteBtn}
              />
            )}

            <Button
              text={isExporting ? "Exporting..." : "Export"}
              customStyle="w-max px-8 py-2 button-gradient"
              fn={() => handleExport(imageUrl, customImageUrl)}
            />
          </div>

          <ImageContext.Provider
            value={[imageUrl, setCustomImageUrl, TiTick, setProgress]}
          >
            <div className=" w-full flex h-full flex-col gap-4">
              <div
                className={`relative pr-2 h-[90%] space-y-3 overflow-y-auto ${
                  isLight
                    ? "[&::-webkit-scrollbar-thumb]:bg-textSecondary [&::-webkit-scrollbar-track]:bg-textLight/90"
                    : "[&::-webkit-scrollbar-thumb]:bg-signUp-dark [&::-webkit-scrollbar-track]:bg-primary-dark"
                } [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full
            
            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:border-[2px]
            [&::-webkit-scrollbar-thumb]:border-transparent
            [&::-webkit-scrollbar-thumb]:bg-clip-padding`}
              >
                <Suspense fallback={<Loading />}>{components[elId]}</Suspense>
              </div>
            </div>
          </ImageContext.Provider>
        </div>
      </div>

      <Modal showModal={showModal} closeFnc={() => setShowModal(false)}>
        <Alert message={errorMsg} />
      </Modal>
    </div>
  );
};

export default EditingPage;
