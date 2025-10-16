import { LuCircleAlert } from "react-icons/lu";

const Alert = ({ message }) => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-4">
      <LuCircleAlert className="text-6xl" />
      <h1 className="text-xl text-center">{message}</h1>
    </div>
  );
};

export default Alert;
