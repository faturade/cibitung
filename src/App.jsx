// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ProfilDesa from './pages/ProfilDesa';
import ProfilKepalaDesa from './pages/ProfilKepalaDesa';
import SejarahDesa from './pages/SejarahDesa';
import BadanPermusyawaratanDesa from './pages/BadanPermusyawaratanDesa';
import VisiDanMisi from './pages/VisiDanMisi';
import PemerintahDesa from './pages/PemerintahDesa';
import Loading from './components/Loading';
import PetaDesa from './pages/PetaDesa';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading animation
    setLoading(true);

    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!isHomePage && <Header />}
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/profildesa" element={<ProfilDesa />} />
            <Route path="/profilkepaladesa" element={<ProfilKepalaDesa />} />
            <Route path="/peta" element={<PetaDesa />} />
            <Route path="/sejarahdesa" element={<SejarahDesa />} />
            <Route path="/bpd" element={<BadanPermusyawaratanDesa />} />
            <Route path="/visimisi" element={<VisiDanMisi />} />
            <Route path="/pemerintahdesa" element={<PemerintahDesa />} />
            {/* Rute lainnya */}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
