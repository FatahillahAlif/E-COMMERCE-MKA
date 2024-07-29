import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register"
import Dataumkm from "./pages/Dataumkm"
import NavbarComp from "./components/Navbar"
import FooterComp from './components/Footer'

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dataumkm" element={<Dataumkm />} />
      </Routes>
      <FooterComp/>
    </Router>
  );
}

export default App;
