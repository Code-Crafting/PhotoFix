import { useCallback, useState } from "react";

export const useExport = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(
    "Looks like you haven't edited the image yet! Try adding a transformation before downloading."
  );
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async (initialImgUrl, customizedUrl) => {
    if (!initialImgUrl.url || !customizedUrl) {
      setShowModal(true);
      setErrorMsg("No image found to export. Please upload one first.");
      return;
    }

    if (initialImgUrl.url === customizedUrl) {
      setShowModal(true);
      return;
    }

    setIsExporting(true);

    const uniqueCode = crypto.randomUUID();
    const nameAndExt = initialImgUrl.name.split(".");
    const fileName = `${nameAndExt[0]}${uniqueCode}.${nameAndExt[1]}`;

    fetch(customizedUrl)
      .then((response) => {
        if (!response.ok) {
          setErrorMsg(
            "Unable to connect to the server. Check your internet connection and try again"
          );
          setShowModal(true);
          return;
        } else {
          return response.blob();
        }
      })
      .then((blob) => {
        // Create a temporary local URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary <a> tag to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName; // Set the filename

        //Programmatically click the link
        document.body.appendChild(a);
        a.click();

        // Clean up the temporary URL and link
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Download failed:", error);
        setErrorMsg("Could not download the image. Check the browser console.");
        setShowModal(true);
      })
      .finally(() => setIsExporting(false));
  }, []);

  return [handleExport, showModal, errorMsg, isExporting, setShowModal];
};
