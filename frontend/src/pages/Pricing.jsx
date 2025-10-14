import SectionHeading from "../ui/SectionHeading";
import PricingCard from "../components/PricingCard";
import { FaRegStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

function Pricing() {
  return (
    <div className="con pt-36">
      {/* heading */}
      <SectionHeading
        title="Choose Your"
        span="Magic Plan"
        subtitle="Start free, upgrade when you need more. No Hidden fees, cancel anytime."
      />

      {/* content */}
      <div className="flex justify-center gap-12">
        <PricingCard
          icon={FaRegStar}
          title="Free"
          subtitle="Perfect for trying out PhotoFix AI"
          price={0}
          currency="$"
          duration="forever"
          isPopular={false}
          facilities={[
            { isProvided: true, facility: "3 edits on free plan" },
            { isProvided: true, facility: "Basic AI background removal" },
            { isProvided: true, facility: "Standard resolution output" },
            { isProvided: true, facility: "community support" },
            { isProvided: false, facility: "Limited daily usage" },
          ]}
        />

        <PricingCard
          icon={LuCrown}
          title="Pro"
          subtitle="Unlimited power for professionals"
          price={19}
          currency="$"
          duration="per month"
          isPopular={true}
          facilities={[
            { isProvided: true, facility: "Unlimited Edits" },
            { isProvided: true, facility: "All AI features unloked" },
            { isProvided: true, facility: "Up to 4K resolution" },
            { isProvided: true, facility: "Batch Processing" },
            { isProvided: true, facility: "API access" },
            { isProvided: true, facility: "Commercial license" },
          ]}
        />
      </div>
    </div>
  );
}

export default Pricing;
