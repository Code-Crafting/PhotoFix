import { FaCropSimple } from "react-icons/fa6";
import { IoTextSharp } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineTextFields } from "react-icons/md";
import { TiStarHalfOutline } from "react-icons/ti";

export const editingTools = [
  {
    id: 1,
    icon: FaCropSimple,
    title: "Crop",
  },
  {
    id: 2,
    icon: IoTextSharp,
    title: "Add Text",
  },
  {
    id: 3,
    icon: TiStarHalfOutline,
    title: "Effects and Enhancements",
  },
  {
    id: 4,
    title: "AI Background Removal",
    icon: FaEraser,
  },
  {
    id: 5,
    title: "Change Background",
    icon: AiOutlineBgColors,
  },
  {
    id: 6,
    title: "Text to Image Generation",
    subtitle:
      "Type your imagination — generate high-quality images from simple text prompts powered by advanced generative AI models.",
    icon: MdOutlineTextFields,
  },
];
