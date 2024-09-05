// src/components/Loading.jsx
import React from 'react';
import Logo from '../../image/logo2.png'; // Ganti dengan path logo Anda

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white bg-opacity-80">
      <div className="text-center">
        <img src={Logo} alt="Logo" className="w-[250px] h-[200px] mb-4" />
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}

export default Loading;
