import { Route, Routes } from "react-router";
import Home from "./assets/Components/Home/Home";
import Header from "./assets/Components/Header/Header";
import Footer from "./assets/Components/Footer/Footer";
import Features from "./assets/Components/Features/Features";
import Pricing from "./assets/Components/Pricing/Pricing";
import RadialGradient from "./assets/Components/RadialGradient/RadialGradient";
import Editor from "./assets/Components/Editor/Editor";

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
