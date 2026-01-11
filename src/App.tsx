import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SamaFit from "./pages/SamaFit";
import JustAGirl from "./pages/JustAGirl";
import Nerdoze from "./pages/Nerdoze";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/samafit" element={<SamaFit />} />
          <Route path="/justagirl" element={<JustAGirl />} />
          <Route path="/nerdoze" element={<Nerdoze />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
