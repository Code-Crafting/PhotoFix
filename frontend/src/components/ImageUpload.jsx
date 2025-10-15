import { useRef, useState } from "react";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/react";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../ui/Button";

const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;

export default function ImageUpload({ setImageUrl }) {
  const fileInputRef = useRef();
  const abortController = new AbortController();

  const authenticator = async () => {
    const res = await fetch(authEndpoint);
    const data = await res.json();
    console.log(data);
    return {
      signature: data.signature,
      expire: data.expire,
      token: data.token,
      publicKey: data.publicKey,
    };
  };

  const handleUpload = async () => {
    // Extract the first file from the file input
    const file = fileInputRef.current.files[0];
    let fileName;
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Select image only!");
      return;
    } else {
      fileName = file.name;
    }

    // Retrieve authentication parameters for the upload.
    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;

    // Call the ImageKit SDK upload function with the required parameters and callbacks.
    try {
      const uploadResponse = await upload({
        // Authentication parameters
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName, // Optionally set a custom file name
        // Progress callback to update upload progress state
        // onProgress: (event) => {
        //   setProgress((event.loaded / event.total) * 100);
        // },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      const { name, url } = uploadResponse;
      setImageUrl({ name: name, url: url });
      // setPreviousWork((prev) => [...prev, { name: name, url: url }]);
      console.log("Upload response:", uploadResponse);
    } catch (error) {
      // Handle specific error types provided by the ImageKit SDK.
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        // Handle any other errors that may occur.
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <label htmlFor="file" className="cursor-pointer">
        <Button
          text="Upload"
          customStyle="w-40 py-2 button-gradient"
          icon={FiUploadCloud}
          iconStyle="text-lg"
        />

        <input
          id="file"
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleUpload}
        />
      </label>
      <p className="mt-2 text-textPrimary/50">
        Support image type: .jpeg, .jpg, .png, .webp
      </p>
    </div>
  );
}
