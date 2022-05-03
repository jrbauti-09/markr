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

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

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

export default function Search(props) {
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  return (
    <div>
      <h1></h1>
      <Searching setLat={props.setLat} setLng={props.setLng} panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  );
}

function Searching(props) {
  //   console.log(props, "This is where it needs to be");
  const setLat = props.setLat;
  const setLng = props.setLng;
  const panTo = props.panTo;

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 48.8566, lng: () => 2.3522 },
      radius: 200 * 1000,
    },
  });
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          //We will convert to coordinates.
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);

            // Reposition the map.
            panTo({ lat, lng });

            // we set the form inputs values to this lat and lng.
            setLat(lat);
            setLng(lng);

            // console.log(lat, lng);
            // console.log(results[0]);
          } catch (error) {
            console.log("error!");
          }
          //   console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Enter address of your landmark"
        />
        <ComboboxPopover style={{ backgroundColor: "whitesmoke" }}>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption
                key={id}
                value={description}
                style={{
                  listStyle: "none",
                  cursor: "pointer",
                  fontSize: "medium",
                }}
              ></ComboboxOption>
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
