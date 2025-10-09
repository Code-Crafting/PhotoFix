import { Route, Routes } from "react-router";
import Home from "./assets/components/Home/Home";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Features from "./assets/components/Features/Features";
import Pricing from "./assets/components/Pricing/Pricing";
import RadialGradient from "./assets/components/RadialGradient/RadialGradient";
import Editor from "./assets/components/Editor/Editor";

function App() {
  return (
    <div className="bg-primary-dark">
      <Header />
      <RadialGradient />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
