import { Route, Routes } from "react-router";
import Home from "./assets/Components/Home/Home";
import Header from "./assets/Components/Header/Header";
import Footer from "./assets/Components/Footer/Footer";
import Features from "./assets/Components/Features/Features";
import Pricing from "./assets/Components/Pricing/Pricing";

function App() {
  return (
    <div className="bg-primary-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
