import { useRef, useState } from "react";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/react";
import Button from "./Button";
import { IoCloudUploadOutline } from "react-icons/io5";

const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
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
        fileName: file.name, // Optionally set a custom file name
        // Progress callback to update upload progress state
        // onProgress: (event) => {
        //   setProgress((event.loaded / event.total) * 100);
        // },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      setImageUrl(uploadResponse.url);
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
    <div className="col-span-2 border-dashed border-4 border-secondary-dark rounded-lg w-3xl grid place-items-center">
      {!imageUrl ? (
        <label htmlFor="dropzone-file" className="cursor-pointer">
          <Button
            icon={IoCloudUploadOutline}
            text="Upload Photo"
            customStyle="text-textPrimary text-lg button-gradient px-8 py-2"
            iconStyle="text-2xl"
          />
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleUpload}
          />
        </label>
      ) : (
        <img src={`${imageUrl}`} className="w-[70%]" />
      )}
    </div>
  );
}
