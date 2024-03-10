import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Counsellor from "./pages/Counsellor";
import Calculator from "./pages/Calculator";
import ConatctUs from "./pages/ContactUs";
import Formularcenter from "./pages/Formularcenter";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counsellor" element={<Counsellor />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact-us" element={<ConatctUs />} />
        <Route path="/Formularcenter" element={<Formularcenter />} />
        Formularcenter
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
