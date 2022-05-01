import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";

const string1 =
  "A-I-z-a-S-y-C-w-m-w-T-Q-L-Q-R-J-K-Z-D-H-P-V-3-1-b-o-Z-K-d-S-D-K-z-C-y-Y-p-F-g";
const string2 = string1.split("-").join("");

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
  margin: "20px",
  borderRadius: "20px",
  boxShadow: "5px 3px 1.3px teal",
};

const center = {
  lat: 48.8566,
  lng: 2.3522,
};

export default function Search() {
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div>
      <h1>
        find
        <span role="img" aria-label="tent">
          Hi There
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  );
}
