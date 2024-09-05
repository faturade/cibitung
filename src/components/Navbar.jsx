import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-biru-bg border-b-4 border-bg-biru">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex sm:ml-4 space-x-2">
              {/* Home Icon */}
              <Link
                to="/"
                className="flex items-center justify-center w-12 h-12 bg-bg-biru text-white hover:bg-bg-blue"
              >
                <FontAwesomeIcon icon={faHome} className="text-sm" />
              </Link>

              {/* Profil Desa Dropdown */}
              <DropdownMenu title="Profil Desa" to="/profildesa">
                <DropdownItem to="/profildesa">Profil Wilayah Desa</DropdownItem>
                <DropdownItem to="/sejarahdesa">Sejarah Desa</DropdownItem>
                <DropdownItem to="/profilkepaladesa">Profil Kepala Desa</DropdownItem>
                <DropdownItem to="/peta">Peta</DropdownItem>
              </DropdownMenu>

              {/* Pemerintahan Desa Dropdown */}
              <DropdownMenu title="Pemerintah Desa" to="/pemerintahdesa">
                <DropdownItem to="/pemerintahdesa">Pemerintah Desa</DropdownItem>
                <DropdownItem to="/visimisi">Visi Dan Misi</DropdownItem>
                <DropdownItem to="/bpd">Badan Permusyawaratan Desa</DropdownItem>
              </DropdownMenu>

              {/* Data Desa Dropdown */}
              <DropdownMenu title="Data Desa">
                <DropdownItem to="/data-pendidikan">Data Pendidikan Dalam Desa</DropdownItem>
                <DropdownItem to="/data-pekerjaan">Data Pekerjaan</DropdownItem>
                <DropdownItem to="/data-golongan-darah">Data Golongan Darah</DropdownItem>
                <DropdownItem to="/data-umur">Data Kelompok Umur</DropdownItem>
                <DropdownItem to="/data-vaksin">Data Vaksin</DropdownItem>
                <DropdownItem to="/status-idm">Status IDM</DropdownItem>
                <DropdownItem to="/data-wilayah">Data Wilayah</DropdownItem>
              </DropdownMenu>

              {/* BUM Desa Dropdown */}
              <DropdownMenu title="BUM Desa">
                <DropdownItem to="/bumdesa-profil">Profil BUM Desa</DropdownItem>
                <DropdownItem to="/bumdesa-adart">AD-ART BUM Desa</DropdownItem>
                <DropdownItem to="/bumdesa-dasar-hukum">Dasar Hukum BUM Desa</DropdownItem>
                <DropdownItem to="/bumdesa-struktur">Struktur BUM Desa</DropdownItem>
              </DropdownMenu>

              {/* Panduan Layanan Dropdown */}
              <DropdownMenu title="Panduan Layanan">
                <DropdownItem to="/panduan-ktp">Syarat Dan Proses Pembuatan E-KTP</DropdownItem>
                <DropdownItem to="/panduan-kk">Syarat Dan Proses Pembuatan KK</DropdownItem>
                <DropdownItem to="/panduan-akte-kelahiran">Syarat Dan Proses Pembuatan Akta Kelahiran</DropdownItem>
                <DropdownItem to="/panduan-akte-kematian">Syarat Dan Proses Pembuatan Akta Kematian</DropdownItem>
                <DropdownItem to="/panduan-surat-pindah">Syarat Dan Proses Mengurus Surat Pindah</DropdownItem>
                <DropdownItem to="/panduan-nikah-online">Syarat Dan Proses Daftar Nikah Online</DropdownItem>
              </DropdownMenu>

              {/* Menu Lain */}
              <div className="relative group flex items-center">
                <Link to="/login" className="text-gray-300 hover:bg-bg-biru hover:text-white px-2 py-[14px] text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DropdownMenu({ title, to, children }) {
  return (
    <div className="relative group flex items-center">
      <button className="flex items-center text-gray-300 hover:bg-bg-biru hover:text-white px-2 py-[14px] text-sm font-medium">
        {to ? <Link to={to}>{title}</Link> : title}
        <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-sm" />
      </button>
      <div className="absolute hidden group-hover:block bg-biru-bg text-white z-20 w-56 top-full left-0">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ to, children }) {
  return (
    <Link to={to} className="block px-3 py-1 text-sm hover:bg-bg-biru">
      {children}
    </Link>
  );
}

export default Navbar;
