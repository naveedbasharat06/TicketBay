import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import convertLocation from "./components/convertLocation";

const MapMarker = () => (
  <div>
    <img
      src="/assets/images/marker.png"
      alt="map marker"
      className="h-[25px]"
    />
  </div>
);

interface Props {
  location?: string;
}

const Map: FC<Props> = ({ location }) => {
  const { coordinates, loading } = convertLocation(location);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!coordinates) {
    return <div>Error fetching location data.</div>;
  }

  const defaultProps = {
    center: coordinates,
    zoom: 12,
  };

  // Options to disable the full-screen control
  const mapOptions = {
    fullscreenControl: false,
  };

  return (
    <div className="h-[440px] w-[100%] rounded-[4px] overflow-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_MAP_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapOptions}
      >
        <MapMarker />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
