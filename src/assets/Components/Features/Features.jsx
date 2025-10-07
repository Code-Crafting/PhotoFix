import { FaEraser, FaEdit, FaMagic, FaExpandArrowsAlt } from "react-icons/fa";
import { RiShadowLine } from "react-icons/ri";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineTextFields } from "react-icons/md";

function Features() {
  const features = [
    {
      id: 1,
      title: "AI Background Removal",
      subtitle:
        "Automatically remove the background of any image in seconds using ImageKit’s AI — perfect for product shots, profile pictures, and creatives.",
      icon: FaEraser,
    },
    {
      id: 2,
      title: "Change Background",
      subtitle:
        "Swap out old backgrounds with new ones — use solid colors, custom uploads, or AI-generated scenes to match your vision.",
      icon: AiOutlineBgColors,
    },
    {
      id: 3,
      title: "Edit Image",
      subtitle:
        "Fine-tune your image with powerful editing tools — crop, rotate, adjust brightness, contrast, or apply stunning filters in real time.",
      icon: FaEdit,
    },
    {
      id: 4,
      title: "Generative Fill",
      subtitle:
        "Fill missing areas or extend your image naturally with AI that blends textures and lighting seamlessly for a realistic finish.",
      icon: FaMagic,
    },
    {
      id: 5,
      title: "AI Drop Shadow",
      subtitle:
        "Automatically add professional-looking shadows to objects for more depth and realism — no manual Photoshop needed.",
      icon: RiShadowLine,
    },
    {
      id: 6,
      title: "Image Upscale",
      subtitle:
        "Enhance and upscale low-resolution images using AI to retain sharp details and improve overall visual quality.",
      icon: FaExpandArrowsAlt,
    },
    {
      id: 7,
      title: "Text to Image Generation",
      subtitle:
        "Type your imagination — generate high-quality images from simple text prompts powered by advanced generative AI models.",
      icon: MdOutlineTextFields,
    },
  ];

  return (
    <div className="text-white con">
      {/* heading */}
      <div className="grid place-items-center w-1/2 mx-auto">
        <h1 className="text-5xl font-bold">
          Magical <span className="text-gradient">Features</span>
        </h1>
        <p className="text-center text-textPrimary/50 mt-2 ">
          Transform your photos with cutting-edge AI technology. Each freature
          is designed to give you professional results in seconds, not hours.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-20 relative z-10">
        {features.map(({ id, title, subtitle, icon: Icon }) => (
          <div
            key={id}
            className="border-2 px-4 py-6 features-gradient shadow-header space-y-2 border-secondary-dark rounded-lg"
          >
            <div className="w-[50px] aspect-square grid place-items-center rounded-xl icon-gradient">
              <Icon className=" text-2xl" />
            </div>

            <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
            <p className="text-textPrimary/50">{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
