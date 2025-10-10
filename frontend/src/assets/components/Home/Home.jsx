import RadialGradient from "../RadialGradient/RadialGradient";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";

import Hero from "./Hero";

function Home() {
  return (
    <div className="relative con min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}

export default Home;
