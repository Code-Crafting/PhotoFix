import { Route, Router, Routes } from "react-router";
import Header from "./assets/Components/Home/Header";
import Home from "./assets/Components/Home/Home";
import RadialGradient from "./assets/Components/RadialGradient/RadialGradient";

function App() {
  return (
    <div className="bg-primary-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
