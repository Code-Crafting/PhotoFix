import { FaCropSimple, FaBorderTopLeft } from "react-icons/fa6";
import { IoTextSharp } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineTextFields, MdGradient } from "react-icons/md";
import { RiShadowLine } from "react-icons/ri";
import { TbRotateRectangle } from "react-icons/tb";

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
    title: "Shadow",
    icon: RiShadowLine,
  },
  {
    id: 4,
    title: "Gradient",
    icon: MdGradient,
  },
  {
    id: 5,
    title: "Border",
    icon: FaBorderTopLeft,
  },
  {
    id: 6,
    title: "Rotate",
    icon: TbRotateRectangle,
  },
  {
    id: 7,
    title: "AI Background Removal",
    icon: FaEraser,
  },
  {
    id: 8,
    title: "Change Background",
    icon: AiOutlineBgColors,
  },
  {
    id: 9,
    title: "Text to Image Generation",
    subtitle:
      "Type your imagination — generate high-quality images from simple text prompts powered by advanced generative AI models.",
    icon: MdOutlineTextFields,
  },
];
