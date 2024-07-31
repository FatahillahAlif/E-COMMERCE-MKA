import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register"
import Dataumkm from "./pages/Dataumkm"
import NavbarComp from "./components/Navbar"
import Profilemitra from './pages/Profilemitra';
import Produkumkm from './pages/Produkumkm'
import Marketplace from './pages/Marketplace';
import FooterComp from './components/Footer';
import Detailproduct from './pages/Detailproduct';

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dataumkm" element={<Dataumkm />} />
        <Route path="/profilemitra" element={<Profilemitra />} />
        <Route path="/produkumkm" element={<Produkumkm />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path='/detailproduct' element={<Detailproduct />} />
      </Routes>
      <FooterComp/>
    </Router>
  );
}

export default App;
