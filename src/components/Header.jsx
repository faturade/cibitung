import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-biru-bg border-b-2 border-bg-biru">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex sm:ml-6">
              {/* Home Icon */}
              <a
                href="#"
                className="flex items-center justify-center w-12 h-[50px] bg-bg-biru text-white hover:bg-bg-blue ml-4"
              >
                <FontAwesomeIcon icon={faHome} className="text-xs" />
              </a>

              {/* Profil Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">
                  Profil Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-biru-bg text-white rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-2 py-2 text-sm hover:bg-bg-biru">Profil Wilayah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Sejarah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Profil Kepala Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Peta</a>
                </div>
              </div>

              {/* Pemerintahan Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">
                  Pemerintahan Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-biru-bg text-white rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Visi Dan Misi</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Pemerintah Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Badan Permusyawaratan Desa</a>
                </div>
              </div>

              {/* Data Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">
                  Data Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-biru-bg text-white rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Pendidikan Dalam Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Pekerjaan</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Golongan Darah</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Kelompok Umur</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Vaksin</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Setatus IDM</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Data Wilayah</a>
                </div>
              </div>

              {/* BUM Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">
                  BUM Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-biru-bg text-white rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Profil BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">AD-ART BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Dasar Hukum BUM Desa</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Struktur BUM Desa</a>
                </div>
              </div>

              {/* Panduan Layanan Dropdown */}
              <div className="relative group flex items-center">
                <button className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">
                  Panduan Layanan
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-biru-bg text-white rounded-md z-20 w-64 top-full left-0">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Pembuatan E-KTP</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Pembuatan KK</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Pembuatan Akta Kelahiran</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Pembuatan Akta Kematian</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Mengurus Surat Pindah</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-bg-biru">Syarat Dan Proses Daftar Nikah Online</a>
                </div>
              </div>

              {/* Menu Lain */}
              <div className="relative group flex items-center">
                <a href="#" className="text-gray-300 hover:bg-bg-biru hover:text-white px-4 py-4 rounded-md text-sm font-medium">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
