import SectionHeading from "../ui/SectionHeading";
import PricingCard from "../components/PricingCard";
import { FaRegStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { facilities } from "../constants/facilities";

function Pricing() {
  return (
    <div className="con 885px:pt-36 500px:pt-32 pt-28">
      {/* heading */}
      <SectionHeading
        title="Choose Your"
        span="Magic Plan"
        subtitle="Start free, upgrade when you need more. No Hidden fees, cancel anytime."
      />

      {/* content */}
      <div className="885px:mt-36 500px:mt-20 mt-16 flex 885px:flex-row flex-col items-center justify-center 885px:gap-12 sm:gap-24 gap-18">
        <PricingCard
          icon={FaRegStar}
          title="Free"
          subtitle="Perfect for trying out PhotoFix AI"
          price={0}
          currency="$"
          duration="forever"
          isPopular={false}
          facilities={facilities.nonPopular}
        />

        <PricingCard
          icon={LuCrown}
          title="Pro"
          subtitle="Unlimited power for professionals"
          price={19}
          currency="$"
          duration="per month"
          isPopular={true}
          facilities={facilities.popular}
        />
      </div>
    </div>
  );
}

export default Pricing;
