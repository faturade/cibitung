import React from 'react';
import Header from './components/Header';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
