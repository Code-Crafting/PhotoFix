import LogoLight from "../assets/images/Logo/LogoLight.png";
import LogoDark from "../assets/images/Logo/LogoDark.png";
import { FaRegHeart } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useContext } from "react";
import { Theme } from "../context/Theme";

function Footer() {
  const [isDark] = useContext(Theme);
  return (
    <div
      className={`con border-t-2 ${
        isDark ? "border-textLight/80" : "border-secondary-dark"
      }  pb-8 mt-28`}
    >
      <div className="885px:w-1/2 sm:w-3/4 mx-auto grid place-items-center">
        <img
          src={isDark ? LogoDark : LogoLight}
          alt="logo"
          className="500px:w-3xs w-52"
        />
        <p
          className={`${
            isDark ? "text-textSecondary" : "text-textPrimary/50"
          } text-center -mt-4 500px:text-lg text-sm`}
        >
          Transform your photos with AI-powered editing tools. Remove
          backgrounds, change backgrounds, and create stunning visuals in
          seconds.
        </p>
        <div
          className={`flex items-center gap-4 ${
            isDark ? "text-textSecondary" : "text-textPrimary/50"
          } mt-6`}
        >
          <div className="flex items-center gap-2">
            Made with <FaRegHeart className="text-pink-400" /> by Monojit Sen
          </div>
          <FaCircleArrowUp
            className={`text-2xl cursor-pointer ${isDark && "text-logIn"}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
