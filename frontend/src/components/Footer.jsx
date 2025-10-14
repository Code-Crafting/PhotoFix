import LogoLight from "../assets/images/Logo/LogoLight.png";
import LogoDark from "../assets/images/Logo/LogoDark.png";
import { FaRegHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="con border-t-2 border-secondary-dark pb-8 mt-20">
      <div className="w-1/2 mx-auto grid place-items-center">
        <img src={LogoLight} alt="logo" className="w-3xs" />
        <p className="text-textPrimary/50 text-center -mt-4">
          Transform your photos with AI-powered editing tools. Remove
          backgrounds, change backgrounds, and create stunning visuals in
          seconds.
        </p>
        <div className="flex items-center gap-2 text-textPrimary/50 mt-6">
          Made with <FaRegHeart className="text-pink-400" /> by Monojit Sen
        </div>
      </div>
    </div>
  );
}
export default Footer;
