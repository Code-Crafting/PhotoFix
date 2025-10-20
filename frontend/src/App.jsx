import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import RadialGradient from "./ui/RadialGradient";
import Editor from "./pages/Editor/Editor";
import { useState } from "react";
import { Theme } from "./context/Theme";

function App() {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);
  return (
    <div className={`${isDark ? "bg-light" : "bg-primary-dark"} relative `}>
      <Theme.Provider value={[isDark, setIsDark]}>
        <Header />
        <RadialGradient />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
        <Footer />
      </Theme.Provider>
    </div>
  );
}

export default App;
