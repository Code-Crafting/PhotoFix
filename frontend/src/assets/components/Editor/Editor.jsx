import { useState } from "react";
import SectionHeading from "../SectionHeading";
import ImageUpload from "./ImageUpload";
import EditingPage from "./EditingPage";
import { ImageContext } from "../../context/ImageContext";

function Editor() {
  return (
    <div className="min-h-screen con relative z-10 flex justify-center items-center flex-col pt-28">
      <EditingPage />
    </div>
  );
}
export default Editor;
