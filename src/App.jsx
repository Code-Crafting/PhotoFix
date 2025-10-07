import { Route, Routes } from "react-router";
import Home from "./assets/Components/Home/Home";
import Header from "./assets/Components/Header/Header";
import Features from "./assets/Components/Features/Features";

function App() {
  return (
    <div className="bg-primary-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Features />
    </div>
  );
}

export default App;
