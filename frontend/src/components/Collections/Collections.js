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

  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);

  // This is for the modal.
  const getImg = (imgSrc, landmarkId) => {
    // console.log(imgSrc, landmarkId);
    setTempImgSrc(imgSrc);
    setModelId(landmarkId);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img className="modal_img" src={tempimgSrc} alt="img"></img>
        <img
          src={close}
          className="icon_modal"
          onClick={() => setModel(false)}
          alt="img"
        ></img>
        <div className="container_links">
          <div>
            <Link className="modal_link" to={`/landmarks/${modelId}`}>
              Landmark detail page...
            </Link>
          </div>
          <div>
            <Link
              className="edit_landmark_link"
              to={`/landmark/edit/${modelId}`}
            >
              Landmark edit page...
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
              <img
                className="gallery_pic"
                src={landmark.imageUrl}
                style={{ width: "100%" }}
                alt="img"
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
