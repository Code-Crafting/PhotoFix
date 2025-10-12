import { useState, lazy } from "react";
import { editingTools } from "../../constants/EditingTools";
import Button from "../Button";
import Crop from "./Crop";
const AddText = lazy(() => import("./AddText"));
const Shadow = lazy(() => import("./Shadow"));
const Gradient = lazy(() => import("./Gradient"));
const Border = lazy(() => import("./Border"));
const Rotate = lazy(() => import("./Rotate"));

const EditingPage = () => {
  const [elId, setElId] = useState(1);
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
              <Icon className="text-2xl" />
              {id === elId && <p className={`text-lg`}>{title}</p>}
            </div>
          );
        })}
      </div>

      {/* editing area */}
      <div className="w-1/2 bg-secondary-dark min-h-[500px] rounded-xl px-2 py-4 "></div>

      {/* required fields */}
      <div className="w-1/4 text-textPrimary features-gradient p-4 rounded-lg shadow-header space-y-3">
        <div className="flex gap-2 justify-end">
          <Button text="Save" customStyle="w-[100px] py-1 button-gradient" />
          <Button text="Export" customStyle="w-[100px] py-1 button-gradient" />
        </div>

        <div className="h-[300px] flex justify-center flex-col gap-4">
          {elId === 2 ? (
            <AddText />
          ) : elId === 3 ? (
            <Shadow />
          ) : elId === 4 ? (
            <Gradient />
          ) : elId === 5 ? (
            <Border />
          ) : elId === 6 ? (
            <Rotate />
          ) : (
            <Crop />
          )}
        </div>

        {/* <Button text="Apply" customStyle="py-2 mt-8 bg-[#643b32]" /> */}
      </div>
    </div>
  );
};

export default EditingPage;
