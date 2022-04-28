import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLandmarks } from "../../store/landmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Gallery.css";

export default function Gallery() {
  const dispatch = useDispatch();

  // an array of objects of all landmarks.
  const landMarks = useSelector((state) => Object.values(state.landmarks));

  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");

  const getImg = (imgSrc, landmarkId) => {
    setTempImgSrc(imgSrc);
    setModelId(landmarkId);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img className="modal_img" src={tempimgSrc}></img>
        <i className="fa-solid" onClick={() => setModel(false)}></i>
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
