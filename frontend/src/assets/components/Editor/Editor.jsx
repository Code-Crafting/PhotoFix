import { useRef, useState } from "react";
import { features } from "../../constants/featuresData";
import SectionHeading from "../SectionHeading";
import ImageUpload from "../ImageUpload";

function Editor() {
  return (
    <div className="min-h-screen con relative z-10 grid place-items-center pt-28">
      <SectionHeading
        title="Magic"
        span="Studio"
        subtitle="Upload your photo and transform it with AI-powered tools. See the magic happen in real-time."
      />
      <div className="grid grid-cols-3 gap-8 mt-12">
        <div className="space-y-4">
          {features.map(({ id, title, icon: Icon }) => (
            <div
              key={id}
              className="text-textPrimary/50 flex items-center gap-2 font-medium text-xl border-2 border-secondary-dark px-4 py-2 rounded-lg features-gradient hover:cursor-pointer hover:scale-105 transition"
            >
              <Icon />
              <p>{title}</p>
            </div>
          ))}
        </div>

        {/* <div className="col-span-2 border-dashed border-4 border-secondary-dark rounded-lg w-3xl grid place-items-center">
          <label htmlFor="dropzone-file" className="cursor-pointer">
            <Button
              icon={IoCloudUploadOutline}
              text="Upload Photo"
              customStyle="text-textPrimary text-lg button-gradient px-8 py-2"
              iconStyle="text-2xl"
            />
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div> */}

        <ImageUpload />
      </div>
    </div>
  );
}
export default Editor;
