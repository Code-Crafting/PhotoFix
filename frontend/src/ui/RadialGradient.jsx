import { useContext } from "react";
import { conDetails } from "../constants/radialConDetails";
import { useParallax } from "../hooks/useParallax";
import { Theme } from "../context/Theme";

function RadialGradient() {
  const scrollY = useParallax();
  const [isDark] = useContext(Theme);
  return (
    <div className="con relative">
      {conDetails.map((el) => {
        const { id, position, width } = el;
        return (
          <div
            key={id}
            className={`absolute bg-radial ${
              isDark ? "radialLight" : "radial"
            } ${position} ${width} rounded-full blur-3xl animate-pulse transition duration-75`}
            style={{ transform: `translateY(${scrollY * 1}px)` }}
          ></div>
        );
      })}
    </div>
  );
}
export default RadialGradient;
