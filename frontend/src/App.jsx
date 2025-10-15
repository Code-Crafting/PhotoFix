import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import RadialGradient from "./ui/RadialGradient";
import { lazy } from "react";
const Editor = lazy(() => import("./pages/Editor/Editor"));

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
