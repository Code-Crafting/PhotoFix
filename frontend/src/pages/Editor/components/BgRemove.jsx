import { GrMagic } from "react-icons/gr";
import Button from "../../../ui/Button";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../../../context/ImageContext";

const BgRemove = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [imageUrl, setCustomImageUrl] = useContext(ImageContext);
  const [showModal, setShowModal] = useState(false);

  const handleBtn = () =>
    !imageUrl.url ? setShowModal(true) : setIsApplied(true);

  const handleBgRemove = () => {
    if (!imageUrl.url) return;
    let params;
    if (isApplied) {
      params = "?tr=e-bgremove";
    } else {
      return;
    }
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
      <Modal closeFnc={() => setShowModal(false)} showModal={showModal}>
        <Alert message="" />
      </Modal>
    </div>
  );
};

export default BgRemove;
