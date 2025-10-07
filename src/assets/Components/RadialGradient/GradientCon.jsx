import { useParallax } from "../../hooks/useParallax";

function GradientCon({ conDetail }) {
  const scrollY = useParallax();
  return (
    <div
      className={`absolute bg-radial ${conDetail.gradient} ${conDetail.position} ${conDetail.width} rounded-full blur-3xl animate-pulse transition duration-75`}
      style={{ transform: `translateY(${scrollY * 0.9}px)` }}
    ></div>
  );
}

export default GradientCon;
