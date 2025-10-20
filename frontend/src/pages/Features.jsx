import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { features } from "../constants/featuresData";
import { useContext } from "react";
import { Theme } from "../context/Theme";

function Features() {
  const [isDark] = useContext(Theme);
  return (
    <div className="con 885px:pt-36 500px:pt-32 pt-28">
      {/* heading */}
      <SectionHeading
        title="Magical"
        span="Features"
        subtitle=" Transform your photos with cutting-edge AI technology. Each freature is
        designed to give you professional results in seconds, not hours."
      />

      {/* content */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 500px:mt-20 mt-16 relative z-10">
        {features.map(({ id, title, subtitle, icon }) => (
          <div
            key={id}
            className={` px-4 py-6 ${
              isDark ? "bg-card" : "features-gradient"
            } shadow-header space-y-2 ${
              isDark ? "" : "border-secondary-dark border-2"
            } rounded-lg hover:cursor-pointer hover:scale-105 transition `}
          >
            <Icon icon={icon} />
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-textLight/80" : "text-textPrimary"
              } mt-4`}
            >
              {title}
            </h3>
            <p
              className={`${
                isDark ? "text-textSecondary" : "text-textPrimary/50"
              }`}
            >
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
