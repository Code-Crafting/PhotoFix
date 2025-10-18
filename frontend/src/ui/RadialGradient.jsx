import { conDetails } from "../constants/radialConDetails";
import { useParallax } from "../hooks/useParallax";

function RadialGradient() {
  const scrollY = useParallax();
  return (
    <div className="con relative">
      {conDetails.map((el) => {
        const { id, gradient, position, width } = el;
        return (
          <div
            key={id}
            className={`absolute bg-radial ${gradient} ${position} ${width} rounded-full blur-3xl animate-pulse transition duration-75`}
            style={{ transform: `translateY(${scrollY * 0.9}px)` }}
          ></div>
        );
      })}
    </div>
  );
}
export default RadialGradient;
