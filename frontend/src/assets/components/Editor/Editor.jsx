import { useState } from "react";
import SectionHeading from "../SectionHeading";
import ImageUpload from "./ImageUpload";
import EditingPage from "./EditingPage";

function Editor() {
  const [previousWork, setPreviousWork] = useState([]);
  const [imageUrl, setImageUrl] = useState("xcv");

  console.log(previousWork);
  return (
    <div className="min-h-screen con relative z-10 flex justify-center items-center flex-col pt-28">
      {!imageUrl ? (
        <>
          <SectionHeading
            title="Magic"
            span="Studio"
            subtitle="Upload your photo and transform it with AI-powered tools. See the magic happen in real-time."
          />
          <div className="border-4 border-secondary-dark rounded-xl w-full min-h-80 px-4 py-4 mt-12 flex flex-wrap">
            <ImageUpload
              setPreviousWork={setPreviousWork}
              setImageUrl={setImageUrl}
            />
          </div>
        </>
      ) : (
        <EditingPage />
      )}
    </div>
  );
}
export default Editor;
