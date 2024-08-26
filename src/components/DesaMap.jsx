import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DesaMap = () => {
  const position = [-6.8661, 107.6186];

  return (
    <div className="flex justify-center py-8">
      <div className="w-[330px] max-w-lg bg-bg-biru rounded-t-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h4 className="text-start text-xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Wilayah Desa
          </h4>
          <MapContainer center={position} zoom={13} style={{ height: '300px', width: '300px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='Leaflet | © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | <a href="https://opensid.my.id/">OpenSID</a>'
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default DesaMap;
