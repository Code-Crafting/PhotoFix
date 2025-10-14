import RadialGradient from "../ui/RadialGradient";
import Features from "./Features";
import Pricing from "./Pricing";
import Hero from "../components/Hero";

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
