import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-biru-bg border-b-4 border-bg-biru">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex sm:ml-6 space-x-4">
              {/* Home Icon */}
              <a
                href="#"
                className="flex items-center justify-center w-16 h-16 bg-bg-biru text-white hover:bg-bg-blue"
              >
                <FontAwesomeIcon icon={faHome} className="text-xl" />
              </a>

              {/* Profil Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-bg-biru hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profil Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-bg-biru text-white py-2 rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Profil Wilayah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Sejarah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Profil Kepala Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Peta</a>
                </div>
              </div>
              
              {/* Pemerintahan Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Pemerintahan Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Visi Dan Misi</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Pemerintah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Badan Permusyawaratan Desa</a>
                </div>
              </div>

              {/* Data Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Data Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Pendidikan Dalam Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Pekerjaan</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Golongan Darah</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Kelompok Umur</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Vaksin</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Setatus IDM</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Wilayah</a>
                </div>
              </div>

              {/* BUM Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  BUM Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Profil BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">AD-ART BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Dasar Hukum BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Struktur BUM Desa</a>
                </div>
              </div>

              {/* Panduan Layanan Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Panduan Layanan
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan E-KTP</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan KK</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan Akta Kelahiran</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan Akta Kematian</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Mengurus Surat Pindah</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Daftar Nikah Online</a>
                </div>
              </div>

              {/* Menu Lain */}
              <div className="relative group flex items-center">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Berita</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Galeri</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
