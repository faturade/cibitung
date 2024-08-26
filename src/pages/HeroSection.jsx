import React from 'react';
import Background from '../../image/Curug-Cikaso.jpg';
import LogoCibitung from '../../image/logo2.png';
import ImgAnnouncement from '../../image/announcement.png';
import ImgArchitect from '../../image/architect.png';
import ImgArchive from '../../image/archive.png';
import ImgGallery from '../../image/image-gallery.png';
import ImgCompliant from '../../image/compliant.png';
import ImgDocument from '../../image/document.png';
import ImgMap from '../../image/map.png';
import ImgPieChart from '../../image/pie-chart.png';
import ImgTrolley from '../../image/trolley.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = () => {
  const features = [
    { text: 'Peta Desa', image: ImgMap },
    { text: 'Produk Hukum', image: ImgDocument },
    { text: 'Informasi Publik', image: ImgAnnouncement },
    { text: 'Lapak', image: ImgTrolley },
    { text: 'Arsip Berita', image: ImgArchive },
    { text: 'Album Galeri', image: ImgGallery },
    { text: 'Pengaduan', image: ImgCompliant },
    { text: 'Pembangunan', image: ImgArchitect },
    { text: 'Status IDM', image: ImgPieChart },
  ];

  return (
    <section id="home" className="hero min-h-screen bg-cover" style={{ backgroundImage: `url(${Background})` }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <img src={LogoCibitung} alt="Logo Desa Cibitung" className="mb-2 w-34 h-32 mx-auto" />
          <h1 className="title text-2xl font-bold text-center max-w-md mx-auto">Informasi Desa Cibitung</h1>
          <p className="mb-8">Kecamatan Cibitung, Kab. Sukabumi</p>
          <div className="relative w-full max-w-xs mx-auto">
            <input 
              type="search" 
              placeholder="Cari informasi..." 
              className="input input-bordered w-full pr-10 text-black"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
            </span>
          </div>
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-white p-3 shadow-lg rounded-md border border-gray-300 w-28 h-28">
                <img src={feature.image} alt={feature.text} className="mb-4 w-8 h-8 hover:w-10 hover:h-10 cursor-pointer" />
                <span className="text-xs text-black text-center">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
