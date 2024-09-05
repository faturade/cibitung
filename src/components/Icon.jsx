import React from 'react';
import ImgAnnouncement from '../../image/announcement.png';
import ImgArchitect from '../../image/architect.png';
import ImgArchive from '../../image/archive.png';
import ImgGallery from '../../image/image-gallery.png';
import ImgCompliant from '../../image/compliant.png';
import ImgDocument from '../../image/document.png';
import ImgMap from '../../image/map.png';
import ImgPieChart from '../../image/pie-chart.png';
import ImgTrolley from '../../image/trolley.png';
import '../pages/HeroSection.css';

const Icon = () => {
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
      <div className="flex justify-center mt-8 gap-4 flex-nowrap overflow-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-white p-3 shadow-lg rounded-md border border-gray-300 w-28 h-28">
            <img src={feature.image} alt={feature.text} className="mb-4 w-8 h-8 hover:w-10 hover:h-10 cursor-pointer" />
            <span className="text-xs text-black text-center">{feature.text}</span>
          </div>
        ))}
      </div>
  );
};

export default Icon;
