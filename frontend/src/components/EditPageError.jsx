import { TbDeviceDesktopExclamation } from "react-icons/tb";

const EditPageError = () => {
  return (
    <div className="md:w-1/2 500px:w-2/3 mx-auto lg:hidden flex flex-col items-center justify-center text-textPrimary/50 gap-4">
      <TbDeviceDesktopExclamation className="text-6xl" />
      <h1 className="text-2xl text-center">
        We want you to love your edits! Switch to a larger screen to fully enjoy
        all the tools and features.
      </h1>
    </div>
  );
};

export default EditPageError;
