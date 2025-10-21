import { useContext } from "react";
import { Theme } from "../context/Theme";

const Loading = () => {
  const [isLight] = useContext(Theme);
  return (
    <span
      className={`loading loading-ring loading-xl absolute top-1/2 left-1/2 -translate-x-1/2 ${
        isLight && "text-textLight"
      }`}
    ></span>
  );
};

export default Loading;
