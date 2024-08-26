import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ProfilDesa from './pages/ProfilDesa';
import ProfilKepalaDesa from './pages/ProfilKepalaDesa';
import Peta from './pages/Peta';
import SejarahDesa from './pages/SejarahDesa';
import BadanPermusyawaratanDesa from './pages/BadanPermusyawaratanDesa';
import VisiDanMisi from './pages/VisiDanMisi';
import PemerintahDesa from './pages/PemerintahDesa';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Conditionally render Header based on the current route */}
      {!isHomePage && <Header />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/profildesa" element={<ProfilDesa />} />
        <Route path="/profilkepaladesa" element={<ProfilKepalaDesa />} />
        <Route path="/peta" element={<Peta />} />
        <Route path="/sejarahdesa" element={<SejarahDesa />} />
        <Route path="/bpd" element={<BadanPermusyawaratanDesa />} />
        <Route path="/visimisi" element={<VisiDanMisi />} />
        <Route path="/pemerintahdesa" element={<PemerintahDesa />} />
        {/* Rute lainnya */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
