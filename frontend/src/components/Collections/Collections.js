import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserLandmarks } from "../../store/usercollection";
import "./Collections.css";
import close from "../../images/close_icon.png";

export default function Collections() {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");

  // an array of objects of all landmarks.

  const userLandmarks = useSelector((state) => Object.values(state.collection));
  const sessionUser = useSelector((state) => state.session.user);

  //   console.log(sessionUser, "sessionUser");
  //   console.log(userLandmarks, "userLandmarks");

  useEffect(() => {
    dispatch(getUserLandmarks(sessionUser.id));
  }, [dispatch]);

  // This is for the modal.
  const getImg = (imgSrc, landmarkId) => {
    console.log(imgSrc, landmarkId);
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
        {userLandmarks.map((landmark) => {
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
