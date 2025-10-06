import Button from "../Button";
import RadialGradient from "../RadialGradient/RadialGradient";
import beforeImg from "../../images/BeforeAfter/beforeImg.webp";
import afterImg from "../../images/BeforeAfter/afterImg.webp";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function Home() {
  return (
    <div className="relative con h-screen">
      <RadialGradient />
      <div className="relative flex items-center justify-between h-full z-10 gap-4">
        {/* left */}
        <div className="w-1/2 ">
          <h1 className="text-6xl text-textPrimary capitalize font-bold leading-18">
            Turn Every Photo <br /> into a{" "}
            <span className="text-gradient">Masterpiece</span>
          </h1>
          <p className="py-2 text-gray-300 leading-6">
            Transform your photos with AI-powered editing tools. Remove
            backgrounds, change backgrounds, and create stunning visuals in
            seconds. Drop a photo. We will do the magic.
          </p>
          <div className="flex mt-2">
            <Button
              text="Try it now"
              customStyle="bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition"
            />
            <Button />
          </div>
        </div>

        {/* right */}
        <div className="w-1/2 grid place-items-center ">
          <div className="max-w-md  rounded-xl overflow-hidden">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={beforeImg} alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src={afterImg} alt="Image two" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
