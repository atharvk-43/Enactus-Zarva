import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const StyledMapContainer = ({ pickup = [28.4744, 77.5021], destination = [28.4698, 77.5075] }) => {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <div className="absolute inset-0 bg-yellow-200/30 blur-2xl rounded-full"></div>
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-gray-50">
        <div className="w-full h-[450px] relative">
          {/* Leaflet Map */}
          <MapContainer
            center={[28.4744, 77.5030]} // Center on Greater Noida
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={pickup}>
              <Popup>Pickup Location</Popup>
            </Marker>
            <Marker position={destination}>
              <Popup>Destination</Popup>
            </Marker>
          </MapContainer>

          {/* Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-yellow-200/50" />
            ))}
          </div>

          {/* Animated Markers */}
          <div
            className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2"
            aria-label="Pickup Animation"
          >
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping" />
            <div className="w-4 h-4 bg-yellow-500 rounded-full absolute top-0" />
          </div>
          <div
            className="absolute bottom-[25%] right-[25%] transform -translate-x-1/2 -translate-y-1/2"
            aria-label="Destination Animation"
          >
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-ping" />
            <div className="w-4 h-4 bg-yellow-600 rounded-full absolute top-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledMapContainer;
