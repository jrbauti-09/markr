import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLandmarks } from "../../store/landmark";
import { getReviews } from "../../store/review";
import LandmarkReview from "../LandmarkReview/LandmarkReview";
import "./LandmarkDetail.css";

//Google api
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// We will useParams to find landmark Id.
// will use the .find method to locate the landmark we want.

const libraries = ["places"];
const mapContainerStyle = {
  width: "600px",
  height: "500px",
  margin: "20px",
  borderRadius: "20px",
  boxShadow: "5px 3px 1.3px teal",
};
// const center = {
//   lat: 48.8566,
//   lng: 2.3522,
// };
export default function LandmarkDetail() {
  const { landMarkId } = useParams();
  const dispatch = useDispatch();
  //   const [latitude, setLatitude] = useState(null);
  //   const [longitude, setLongitude] = useState(null);
  const [id, setId] = useState(null);
  const [click, setClick] = useState(false);

  const landMarks = useSelector((state) => Object.values(state.landmarks));
  const reviews = useSelector((state) => Object.values(state.reviews));

  //   console.log(reviews)
  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews(landMarkId));
  }, [dispatch]);

  // Get Landmark based on params.
  // This works.
  const landMark = landMarks.find((item) => {
    return item.id == landMarkId;
  });

  //   useEffect(() => {
  //     setLatitude(parseFloat(landMark.lat));
  //     setLongitude(parseFloat(landMark.lng));
  //   }, [landMarks, latitude, longitude]);

  const latitude = parseFloat(landMark.lat);
  const longitude = parseFloat(landMark.lng);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  console.log(landMark, "This is the landMark");

  return (
    <>
      <div className="map_div">
        {/* <h1 className="map_header">
          LandMark{" "}
          <span role="img" aria-label="flag">
            🚩
          </span>
        </h1> */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={{
            lat: latitude,
            lng: longitude,
          }}
        >
          <Marker
            // we can grab lat/lng info
            position={{
              lat: latitude,
              lng: longitude,
            }}
            icon={{
              url: "https://i.dlpng.com/static/png/7069634_preview.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => setClick(!click)}
          />
          {click && (
            <InfoWindow
              position={{
                lat: latitude,
                lng: longitude,
              }}
            >
              <div>{landMark.name}</div>
            </InfoWindow>
          )}
        </GoogleMap>
        <div className="image_div">
          <img className="image_landmark" src={landMark.imageUrl}></img>
        </div>
      </div>
      <div className="review_description_main_container">
        <div className="reviews_container">
          <h1 className="reviews_header">Landmark Reviews</h1>
          <LandmarkReview reviews={reviews} />
        </div>
        <div className="landmark_description_container">
          <h1 className="landmark_description_header">{landMark.name}</h1>
          <p className="landmark_description">{landMark.description}</p>
        </div>
      </div>
    </>
  );
}
