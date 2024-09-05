import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../image/logo2.png';

function Header() {
  return (
    <header className="bg-white text-biru-bg p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-[90px] h-[70px]" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Desa Cibitung</span>
              <p className="text-sm text-gray-600">Kec. Cibitung Kab. Sukabumi</p>
            </div>
          </Link>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-200"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
