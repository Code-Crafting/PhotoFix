import { createContext, useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

export const ImageContext = createContext("");

export const ImageContextProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState({ name: "", url: "" });
  const [customImageUrl, setCustomImageUrl] = useState(imageUrl.url);

  useEffect(() => {
    setCustomImageUrl(imageUrl.url);
  }, [imageUrl]);

  return (
    <ImageContext.Provider
      value={[
        progress,
        setProgress,
        imageUrl,
        setImageUrl,
        customImageUrl,
        setCustomImageUrl,
        TiTick,
      ]}
    >
      {children}
    </ImageContext.Provider>
  );
};
