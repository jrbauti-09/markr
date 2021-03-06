import React from "react";
import "./Map.css";
//Google api
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 43.723,
  lng: 10.3966,
};

// process.env.REACT_APP_GOOGLE_MAPS_API_KEY

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwmwTQLQRJKZDHPV31boZKdSDKzCyYpFg",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="map_div">
      <h1 className="map_header">
        LandMark{" "}
        <span role="img" aria-label="flag">
          🚩
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker
          // we can grab lat/lng info
          position={{
            lat: 48.8566,
            lng: 2.3522,
          }}
        />
      </GoogleMap>
    </div>
  );
}
