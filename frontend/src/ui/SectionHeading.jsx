import { useContext } from "react";
import { Theme } from "../context/Theme";

function SectionHeading({ title, subtitle, span }) {
  const [isDark] = useContext(Theme);
  return (
    <div className="grid place-items-center 885px:w-1/2 sm:w-3/4 mx-auto">
      <h1
        className={`885px:text-5xl 500px:text-4xl text-3xl text-center font-bold ${
          isDark ? "text-textLight/80" : "text-textPrimary"
        }`}
      >
        {title} <span className="text-gradient">{span}</span>
      </h1>
      <p
        className={`text-center ${
          isDark ? "text-textSecondary" : "text - textPrimary / 50"
        } mt-2 500px:text-lg text-sm`}
      >
        {subtitle}
      </p>
    </div>
  );
}
export default SectionHeading;
