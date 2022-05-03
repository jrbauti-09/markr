import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLandmarks } from "../../store/landmark";
import { getUsers } from "../../store/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import close from "../../images/close_icon.png";
import "./Gallery.css";

//Google api
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// const libraries = ["places"];
// const string =
//   "A-I-z-a-S-y-C-w-m-w-T-Q-L-Q-R-J-K-Z-D-H-P-V-3-1-b-o-Z-K-d-S-D-K-z-C-y-Y-p-F-g";
// const string2 = string.split("-").join("");

export default function Gallery() {
  const dispatch = useDispatch();

  // an array of objects of all landmarks.
  const landMarks = useSelector((state) => Object.values(state.landmarks));
  // console.log(landMarks, "Landmarks..");

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: string2,
  //   libraries,
  // });

  // sorts by latest.
  landMarks.sort(function (a, b) {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");

  // if (loadError) return "Error loading maps";
  // if (!isLoaded) return "Loading Maps";

  // This is for the modal.
  const getImg = (imgSrc, landmarkId) => {
    setTempImgSrc(imgSrc);
    setModelId(landmarkId);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img className="modal_img" src={tempimgSrc}></img>
        <img
          src={close}
          className="icon_modal"
          onClick={() => setModel(false)}
        ></img>
        <Link className="modal_link" to={`/landmarks/${modelId}`}>
          Landmark detail page...
        </Link>
      </div>
      <div className="gallery">
        {landMarks.map((landmark) => {
          return (
            <div
              className="pics"
              key={landmark.id}
              onClick={() => getImg(landmark.imageUrl, landmark.id)}
            >
              <img
                className="gallery_pic"
                src={landmark.imageUrl}
                style={{ width: "100%" }}
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
