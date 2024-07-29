import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register"
import Dataumkm from "./pages/Dataumkm"
import NavbarComp from "./components/Navbar"

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dataumkm" element={<Dataumkm />} />
        <Route path="/profilemitra" element={<Profilemitra />} />
      </Routes>
      <FooterComp/>
    </Router>
  );
}

export default App;
