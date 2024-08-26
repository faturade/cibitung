import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='className="footer p-5 bg-biru-bg text-neutral-content"'>
      <div className="footer p-5 text-neutral-content">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <p className="mt-2">Alamat: Desa Cibitung, Sukabumi, Jawa Barat</p>
            <p>Telp: 0812-3456-7890</p>
            <p>Email: desa.cibitung@example.com</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Album Gallery</h4>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <img src="gambar1.jpg" alt="Gallery Image 1" className="w-full h-auto object-cover rounded" />
              <img src="gambar2.jpg" alt="Gallery Image 2" className="w-full h-auto object-cover rounded" />
              <img src="gambar3.jpg" alt="Gallery Image 3" className="w-full h-auto object-cover rounded" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">Desa Cibitung</h4>
            <p className="mt-2">
              Website Resmi Pemerintah Desa Cibitung, Kecamatan Cibitung, Sukabumi, Jawa Barat
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-content mt-10"></div>
      <div className="text-center mt-4 text-white">
        <p>© 2024 Nama Desa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
