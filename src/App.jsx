import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dataumkm from "./pages/Dataumkm";
import NavbarComp from "./components/Navbar";
import Profilemitra from './pages/Profilemitra';
import Produkumkm from './pages/Produkumkm';
import Marketplace from './pages/Marketplace';
import FooterComp from './components/Footer';
import Cart from './pages/Cart';
import Detailproduct from './pages/Detailproduct';
import Dashboard from './pages/mitra/Dashboard';
import Homepage from './pages/Homepage';
import SideBar from './components/mitra/SideBar';

function App() {
  return (
    <Router>
      <ConditionalNavbarAndFooter />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dataumkm" element={<Dataumkm />} />
        <Route path="/profilemitra" element={<Profilemitra />} />
        <Route path="/produkumkm" element={<Produkumkm />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detailproduct" element={<Detailproduct />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

function ConditionalNavbarAndFooter() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ['/dashboard','/sidebar'];

  return (
    <>
      {!hideNavbarFooterRoutes.includes(location.pathname) && <NavbarComp />}
    </>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ['/dashboard',"/sidebar"];

  return (
    <>
      {!hideNavbarFooterRoutes.includes(location.pathname) && <FooterComp />}
    </>
  );
}

export default App;