import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import beforeImg from "../assets/images/BeforeAfter/beforeImg.webp";
import afterImg from "../assets/images/BeforeAfter/afterImg.webp";
import Button from "../ui/Button";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Theme } from "../context/Theme";

function Hero() {
  const navigate = useNavigate();
  const [isDark] = useContext(Theme);

  return (
    <div className="relative flex 885px:flex-row flex-col items-center justify-between z-10 885px:gap-4 gap-8 885px:pt-52 500px:pt-42 pt-34">
      {/* left */}
      <div className="885px:w-1/2 sm:w-3/4 w-full text-center 885px:text-left">
        <h1
          className={`1100px:text-6xl 500px:text-5xl text-4xl ${
            isDark ? "text-textLight/80" : "text-textPrimary"
          } capitalize font-bold 1100px:leading-18 500px:leading-14 leading-12`}
        >
          Turn Every Photo <br /> into a{" "}
          <span className="text-gradient">Masterpiece</span>
        </h1>
        <p
          className={`py-2 ${
            isDark ? "text-textSecondary" : "text-textPrimary/50"
          } leading-6 500px:text-lg text-sm`}
        >
          Transform your photos with AI-powered editing tools. Remove
          backgrounds, change backgrounds, and create stunning visuals in
          seconds. Drop a photo. We will do the magic.
        </p>
        <div className="flex mt-2 885px:justify-start justify-center">
          <Button
            icon={FiUpload}
            iconStyle="text-lg"
            text="Open AI Photo Editor"
            customStyle="button-gradient px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition"
            fn={() => navigate("editor")}
          />
        </div>
      </div>

      {/* right */}
      <div className="885px:w-1/2 grid place-items-center ">
        <div className="1100px:max-w-md 885px:max-w-sm max-w-xl rounded-xl overflow-hidden shadow-header">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage src={beforeImg} alt="Image one" />
            }
            itemTwo={<ReactCompareSliderImage src={afterImg} alt="Image two" />}
          />
        </div>
        <p
          className={`mt-3 ${
            isDark ? "text-textSecondary" : "text - textPrimary / 50"
          } tracking-wider`}
        >
          Drag the slider to see the magic✨
        </p>
      </div>
    </div>
  );
}

export default Hero;
