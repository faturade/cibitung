import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUsers, faHouseUser, faHandsHelping, faChartPie } from '@fortawesome/free-solid-svg-icons';

const DataDesa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Data Desa</h2>
      <div className="border rounded-lg shadow-md">
        <div
          className="p-4 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
          onClick={() => toggleDropdown(0)}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUsers} />
            <span className="text-lg">Statistik Penduduk</span>
          </div>
          <FontAwesomeIcon icon={activeIndex === 0 ? faChevronUp : faChevronDown} />
        </div>
        {activeIndex === 0 && (
          <div className="overflow-hidden transition-all duration-300">
            <ul className="p-4">
              <li className="p-2 hover:bg-gray-50">Demografi</li>
              <li className="p-2 hover:bg-gray-50">Pertumbuhan Penduduk</li>
            </ul>
          </div>
        )}

        <div
          className="p-4 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
          onClick={() => toggleDropdown(1)}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHouseUser} />
            <span className="text-lg">Statistik Keluarga</span>
          </div>
          <FontAwesomeIcon icon={activeIndex === 1 ? faChevronUp : faChevronDown} />
        </div>
        {activeIndex === 1 && (
          <div className="overflow-hidden transition-all duration-300">
            <ul className="p-4">
              <li className="p-2 hover:bg-gray-50">Jumlah Keluarga</li>
              <li className="p-2 hover:bg-gray-50">Kepala Keluarga</li>
            </ul>
          </div>
        )}

        <div
          className="p-4 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
          onClick={() => toggleDropdown(2)}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHandsHelping} />
            <span className="text-lg">Statistik Bantuan</span>
          </div>
          <FontAwesomeIcon icon={activeIndex === 2 ? faChevronUp : faChevronDown} />
        </div>
        {activeIndex === 2 && (
          <div className="overflow-hidden transition-all duration-300">
            <ul className="p-4">
              <li className="p-2 hover:bg-gray-50">Bantuan Sosial</li>
              <li className="p-2 hover:bg-gray-50">Bantuan Pemerintah</li>
            </ul>
          </div>
        )}

        <div
          className="p-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
          onClick={() => toggleDropdown(3)}
        >
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faChartPie} />
            <span className="text-lg">Statistik Lainnya</span>
          </div>
          <FontAwesomeIcon icon={activeIndex === 3 ? faChevronUp : faChevronDown} />
        </div>
        {activeIndex === 3 && (
          <div className="overflow-hidden transition-all duration-300">
            <ul className="p-4">
              <li className="p-2 hover:bg-gray-50">Ekonomi Desa</li>
              <li className="p-2 hover:bg-gray-50">Kesehatan Desa</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataDesa;
