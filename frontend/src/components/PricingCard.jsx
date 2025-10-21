import { useContext } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Theme } from "../context/Theme";

function PricingCard({
  icon,
  title,
  subtitle,
  price,
  currency,
  duration,
  facilities,
  isPopular,
}) {
  const [isLight] = useContext(Theme);

  return (
    <div
      className={`500px:w-96 w-80 px-4 py-12 relative z-10 ${
        isLight ? "bg-card" : "bg-primary-dark"
      } rounded-xl shadow-pricing ${isPopular && "sm:scale-110 scale-100"}`}
    >
      {isPopular && (
        <div className="absolute text-textPrimary top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 px-6 py-2 rounded-full icon-gradient">
          Most Popular
        </div>
      )}
      <div className="grid place-items-center gap-2">
        <Icon icon={icon} />

        <h1
          className={`${
            isLight ? "text-textLight/80" : "text-textPrimary"
          } text-3xl font-bold`}
        >
          {title}
        </h1>
        <p
          className={`${
            isLight ? "text-textSecondary" : "text-textPrimary/50"
          }`}
        >
          {subtitle}
        </p>
        <p
          className={`${
            isLight ? "text-textSecondary" : "text-textPrimary/50"
          } tracking-wide`}
        >
          <span
            className={`${
              isLight ? "text-textLight/80" : "text-textPrimary"
            } text-4xl`}
          >
            {currency}
            {price}
          </span>{" "}
          / {duration}
        </p>
      </div>

      <div
        className={`mt-4 ${
          isLight ? "text-textLight/80" : "text-textPrimary"
        } space-y-2 mb-8`}
      >
        {facilities.map((el, i) => {
          return (
            <div key={i} className="flex gap-2 items-center">
              {el.isProvided ? (
                <FaCheckCircle
                  className={`text-lg ${
                    isLight ? "text-signUp" : "text-[#51271d]"
                  }`}
                />
              ) : (
                <FaMinusCircle
                  className={`text-lg ${
                    isLight ? "text-textSecondary" : "text-textPrimary/50"
                  }`}
                />
              )}
              <p>{el.facility}</p>
            </div>
          );
        })}
      </div>
      <Button
        text={isPopular ? "Go Pro" : "Start Free"}
        customStyle="text-textPrimary py-2 button-gradient shadow-header"
      />
    </div>
  );
}
export default PricingCard;
