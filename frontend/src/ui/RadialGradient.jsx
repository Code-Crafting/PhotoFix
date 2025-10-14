import { conDetails } from "../constants/radialConDetails";
import { useParallax } from "../hooks/useParallax";

function RadialGradient() {
  const scrollY = useParallax();
  return (
    <div className="con relative">
      {conDetails.map((el) => {
        const { gradient, position, width } = el;
        <div
          className={`absolute bg-radial ${gradient} ${position} ${width} rounded-full blur-3xl animate-pulse transition duration-75`}
          style={{ transform: `translateY(${scrollY * 0.9}px)` }}
        ></div>;
      })}
    </div>
  );
}
export default RadialGradient;
