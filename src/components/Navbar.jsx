import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-biru-bg border-b-4 border-bg-biru">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex sm:ml-6 space-x-4">
              {/* Home Icon */}
              <Link
                to="/"
                className="flex items-center justify-center w-16 h-16 bg-bg-biru text-white hover:bg-bg-blue"
              >
                <FontAwesomeIcon icon={faHome} className="text-xl" />
              </Link>

              {/* Profil Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-bg-biru hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/profildesa">Profil Desa</Link>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-bg-biru text-white py-2 rounded-md z-20 w-64 top-full left-0">
                  <Link to="/profildesa" className="block px-4 py-2 text-sm hover:bg-bg-biru">Profil Wilayah Desa</Link>
                  <Link to="/sejarahdesa" className="block px-4 py-2 text-sm hover:bg-bg-biru">Sejarah Desa</Link>
                  <Link to="/profilkepaladesa" className="block px-4 py-2 text-sm hover:bg-bg-biru">Profil Kepala Desa</Link>
                  <Link to="/peta" className="block px-4 py-2 text-sm hover:bg-bg-biru">Peta</Link>
                </div>
              </div>
              
              {/* Pemerintahan Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-bg-biru hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <Link to="/pemerintahdesa">Pemerintah Desa</Link>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-bg-biru text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <Link to="/pemerintahdesa" className="block px-4 py-2 text-sm hover:bg-bg-biru">Pemerintah Desa</Link>
                  <Link to="/visimisi" className="block px-4 py-2 text-sm hover:bg-bg-biru">Visi Dan Misi</Link>
                  <Link to="/bpd" className="block px-4 py-2 text-sm hover:bg-bg-biru">Badan Permusyawaratan Desa</Link>
                </div>
              </div>

              {/* Data Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Data Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <Link to="/data-pendidikan" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Pendidikan Dalam Desa</Link>
                  <Link to="/data-pekerjaan" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Pekerjaan</Link>
                  <Link to="/data-golongan-darah" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Golongan Darah</Link>
                  <Link to="/data-umur" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Kelompok Umur</Link>
                  <Link to="/data-vaksin" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Vaksin</Link>
                  <Link to="/status-idm" className="block px-4 py-2 text-sm hover:bg-gray-600">Setatus IDM</Link>
                  <Link to="/data-wilayah" className="block px-4 py-2 text-sm hover:bg-gray-600">Data Wilayah</Link>
                </div>
              </div>

              {/* BUM Desa Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  BUM Desa
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-60 top-full left-0">
                  <Link to="/bumdesa-profil" className="block px-4 py-2 text-sm hover:bg-gray-600">Profil BUM Desa</Link>
                  <Link to="/bumdesa-adart" className="block px-4 py-2 text-sm hover:bg-gray-600">AD-ART BUM Desa</Link>
                  <Link to="/bumdesa-dasar-hukum" className="block px-4 py-2 text-sm hover:bg-gray-600">Dasar Hukum BUM Desa</Link>
                  <Link to="/bumdesa-struktur" className="block px-4 py-2 text-sm hover:bg-gray-600">Struktur BUM Desa</Link>
                </div>
              </div>

              {/* Panduan Layanan Dropdown */}
              <div className="relative group flex items-center">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Panduan Layanan
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded-md z-20 w-64 top-full left-0">
                  <Link to="/panduan-ktp" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan E-KTP</Link>
                  <Link to="/panduan-kk" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan KK</Link>
                  <Link to="/panduan-akte-kelahiran" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan Akta Kelahiran</Link>
                  <Link to="/panduan-akte-kematian" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Pembuatan Akta Kematian</Link>
                  <Link to="/panduan-surat-pindah" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Mengurus Surat Pindah</Link>
                  <Link to="/panduan-nikah-online" className="block px-4 py-2 text-sm hover:bg-gray-600">Syarat Dan Proses Daftar Nikah Online</Link>
                </div>
              </div>

              {/* Menu Lain */}
              <div className="relative group flex items-center">
                <Link to="/berita" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Berita</Link>
                <Link to="/galeri" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Galeri</Link>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
