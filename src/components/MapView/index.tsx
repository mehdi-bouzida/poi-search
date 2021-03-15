import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle: React.CSSProperties = {
  width: '100vw',
  height: '95vh',
};

interface Position {
  position: {
    lat: number;
    lng: number;
  };
}

const MapView: React.VFC<Position> = ({ position }) => (
  <>
    <LoadScript id="script-loader" googleMapsApiKey="" language="en">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={position}
        zoom={8}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  </>
);

export default MapView;
