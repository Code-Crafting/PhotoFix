import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import beforeImg from "../assets/images/BeforeAfter/beforeImg.webp";
import afterImg from "../assets/images/BeforeAfter/afterImg.webp";
import Button from "../ui/Button";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-between z-10 gap-4 pt-52">
      {/* left */}
      <div className="w-1/2 ">
        <h1 className="text-6xl text-textPrimary capitalize font-bold leading-18">
          Turn Every Photo <br /> into a{" "}
          <span className="text-gradient">Masterpiece</span>
        </h1>
        <p className="py-2 text-textPrimary/50 leading-6">
          Transform your photos with AI-powered editing tools. Remove
          backgrounds, change backgrounds, and create stunning visuals in
          seconds. Drop a photo. We will do the magic.
        </p>
        <div className="flex mt-2">
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
      <div className="w-1/2 grid place-items-center ">
        <div className="max-w-md rounded-xl overflow-hidden shadow-header">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage src={beforeImg} alt="Image one" />
            }
            itemTwo={<ReactCompareSliderImage src={afterImg} alt="Image two" />}
          />
        </div>
        <p className="mt-3 text-textPrimary/50 tracking-wider">
          Drag the slider to see the magic✨
        </p>
      </div>
    </div>
  );
}

export default Hero;
