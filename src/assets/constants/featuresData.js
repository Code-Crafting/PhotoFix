import { FaEraser, FaEdit, FaMagic, FaExpandArrowsAlt } from "react-icons/fa";
import { RiShadowLine } from "react-icons/ri";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineTextFields } from "react-icons/md";

export const features = [
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
