import { FaEraser } from "react-icons/fa";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineTextFields, MdGradient } from "react-icons/md";
import { BiCrop, BiRotateRight } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import { RiShadowLine } from "react-icons/ri";
import { FaBorderTopLeft } from "react-icons/fa6";

export const features = [
  {
    id: 1,
    title: "AI Background Removal",
    subtitle:
      "Automatically remove image backgrounds in seconds using ImageKit’s powerful AI. No manual tracing or masking needed — just upload and go. Perfect for e-commerce, portraits, and creative editing.",
    icon: FaEraser,
  },
  {
    id: 2,
    title: "Change Background",
    subtitle:
      "Instantly replace dull or unwanted backgrounds with new ones of your choice. Use solid colors, gradients, or AI-generated scenes to match your style. Create professional visuals that fit any context or theme.",
    icon: AiOutlineBgColors,
  },
  {
    id: 3,
    title: "Text to Image Generation",
    subtitle:
      "Turn your imagination into visuals by describing what you want to see. Our AI engine transforms simple text prompts into stunning, realistic images. Perfect for concept art, design inspiration, and creative projects.",
    icon: MdOutlineTextFields,
  },
  {
    id: 4,
    title: "Crop",
    subtitle:
      "Trim and resize your images effortlessly for the perfect composition. Choose from preset aspect ratios or create your own custom size. Ideal for social media posts, banners, and precise visual framing.",
    icon: BiCrop,
  },
  {
    id: 5,
    title: "Add Text",
    subtitle:
      "Add personalized text to your images with full control over font, color, and style. Position it anywhere on the canvas to express your message clearly. Great for posters, memes, and creative storytelling.",
    icon: BsTextParagraph,
  },
  {
    id: 6,
    title: "Shadow",
    subtitle:
      "Add realistic shadows to your images for a sense of depth and dimension. Adjust blur, spread, and opacity for perfect results every time. Enhance objects, cutouts, or text with professional lighting effects.",
    icon: RiShadowLine,
  },
  {
    id: 7,
    title: "Gradient",
    subtitle:
      "Apply smooth gradient overlays or backgrounds to bring your images to life. Choose from preset color blends or create your own combinations. Perfect for adding mood, style, or modern design appeal.",
    icon: MdGradient,
  },
  {
    id: 8,
    title: "Border",
    subtitle:
      "Frame your photos beautifully with customizable borders and outlines. Adjust color, thickness, and style to match your theme. Give your images a polished, gallery-ready appearance with just a click.",
    icon: FaBorderTopLeft,
  },
  {
    id: 9,
    title: "Rotate",
    subtitle:
      "Rotate your images freely or snap them to preset angles for perfect alignment. Fix tilted shots or explore creative rotations effortlessly. Achieve balance, symmetry, and precision in every edit.",
    icon: BiRotateRight,
  },
];
