import { GrMagic } from "react-icons/gr";
import Button from "../../../ui/Button";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../../../context/ImageContext";

const BgRemove = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);

  const handleBtn = () =>
    !imageUrl.url ? alert("Select an Image") : setIsApplied(true);

  const handleBgRemove = () => {
    if (!imageUrl.url) return;
    let params;
    if (isApplied) {
      params = "?tr=e-bgremove";
    } else {
      return;
    }
    console.log("working");
    setCustomImageUrl(`${imageUrl.url}${params}`);
  };
  useEffect(() => {
    handleBgRemove();
  }, [isApplied]);

  return (
    <div className="text-textPrimary/50 space-y-3">
      <p className="text-center text-lg">
        Wanna see the magic of AI? <br /> Just click on the button bewlow!
      </p>

      <Button
        text="Apply Magic"
        customStyle="mt-12 button-gradient py-2"
        icon={GrMagic}
        fn={handleBtn}
      />
    </div>
  );
};

export default BgRemove;
