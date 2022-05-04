import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserLandmarks } from "../../store/usercollection";
import { getUsers } from "../../store/user";
import { getLandmarks } from "../../store/landmark";
import DeleteLandmark from "../DeleteLandmark/DeleteLandmark";
import "./Collections.css";
import close from "../../images/close_icon.png";
import bin from "../../images/garbage_trash_bin.ico";
import edit from "../../images/Edit_button.png";
import map from "../../images/map_button.png";

export default function Collections() {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // console.log(deleteModal);

  // an array of objects of all landmarks.

  const userLandmarks = useSelector((state) => Object.values(state.collection));
  const sessionUser = useSelector((state) => state.session.user);

  // sorts by latest.
  userLandmarks.sort(function (a, b) {
    return b.id - a.id;
  });

  let deleteForm;
  if (deleteModal) {
    deleteForm = (
      <DeleteLandmark
        props={modelId}
        set={setDeleteModal}
        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}
        setModel={setModel}
      />
    );
  }

  //   console.log(sessionUser, "sessionUser");
  //   console.log(userLandmarks, "userLandmarks");

  useEffect(() => {
    dispatch(getUserLandmarks(sessionUser.id));
  }, [dispatch, sessionUser.id, confirmDelete]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getLandmarks());
  // }, [dispatch]);

  // This is for the modal.
  const getImg = (imgSrc, landmarkId) => {
    // console.log(imgSrc, landmarkId);
    setTempImgSrc(imgSrc);
    setModelId(landmarkId);
    setModel(true);
  };

  return (
    <>
      <h1 className="dashboard_header" style={{ textAlign: "center" }}>
        COLLECTIONS GALLERY
        <div className="gallery_underline"></div>
      </h1>
      <div className={model ? "model open" : "model"}>
        <img className="modal_img" src={tempimgSrc} alt="img"></img>
        <img
          src={close}
          className="icon_modal"
          onClick={() => setModel(false)}
          alt="img"
        ></img>
        <div className="close_icon" onClick={() => setModel(false)}>
          <a href="#">
            <span class="left">
              <span class="circle-left"></span>
              <span class="circle-right"></span>
            </span>
            <span class="right">
              <span class="circle-left"></span>
              <span class="circle-right"></span>
            </span>
          </a>
        </div>
        <div className="container_links">
          <div>
            <Link className="modal_link" to={`/landmark/edit/${modelId}`}>
              <img src={edit} alt="edit_button"></img>
            </Link>
          </div>
          <div>
            <Link className="edit_landmark_link" to={`/landmarks/${modelId}`}>
              <img src={map} alt="map_button"></img>
            </Link>
          </div>
          <div>
            <img
              className="bin_icon"
              src={bin}
              style={{ color: "white", fontSize: "large" }}
              onClick={() => setDeleteModal(!deleteModal)}
              alt="img"
            ></img>
            <div>{deleteForm}</div>
          </div>
        </div>
      </div>
      <div className="gallery">
        {userLandmarks.map((landmark) => {
          return (
            <div
              className="pics"
              key={landmark.id}
              onClick={() => getImg(landmark.imageUrl, landmark.id)}
            >
              <div className="gallery_div">
                <img
                  className="gallery_pic"
                  src={landmark.imageUrl}
                  style={{ width: "100%" }}
                  alt="img"
                ></img>
              </div>

              <h1 className="gallery_header">{landmark?.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
