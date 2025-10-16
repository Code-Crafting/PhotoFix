import Button from "../ui/Button";
import { createPortal } from "react-dom";

const Modal = ({ children, closeFnc, showModal }) => {
  return createPortal(
    <div
      className={`${
        !showModal && "hidden"
      } fixed top-0 left-0 h-dvh bg-white/20 w-full z-[9999]`}
    >
      <div className="w-full h-full grid place-items-center">
        <div className="w-2xl aspect-video bg-secondary-dark rounded-xl flex flex-col items-center justify-center gap-4">
          {children}
          <Button
            text="Understood"
            customStyle="button-gradient w-50 py-2"
            fn={closeFnc}
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
