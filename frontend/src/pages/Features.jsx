import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { features } from "../constants/featuresData";

function Features() {
  return (
    <div className="con pt-36">
      {/* heading */}
      <SectionHeading
        title="Magical"
        span="Features"
        subtitle=" Transform your photos with cutting-edge AI technology. Each freature is
        designed to give you professional results in seconds, not hours."
      />

      {/* content */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-20 relative z-10">
        {features.map(({ id, title, subtitle, icon }) => (
          <div
            key={id}
            className="border-2 px-4 py-6 features-gradient shadow-header space-y-2 border-secondary-dark rounded-lg hover:cursor-pointer hover:scale-105 transition "
          >
            <Icon icon={icon} />
            <h3 className="text-xl font-semibold text-textPrimary mt-4">
              {title}
            </h3>
            <p className="text-textPrimary/50">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
