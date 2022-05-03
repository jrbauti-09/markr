import React from "react";
import "./DeleteLandmark.css";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { deleteLandmark } from "../../store/landmark";

export default function DeleteLandmark(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  let setDeleteModal = props.set;
  let landMarkId = props.props;
  let confirmDelete = props.confirmDelete;
  let setConfirmDelete = props.setConfirmDelete;

  //   console.log(landMarkId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.alert("Successful delete.");
    setDeleteModal(false);
    setConfirmDelete(!confirmDelete);
    // TO DO, dispatch to THUNK.
    dispatch(deleteLandmark(landMarkId));
    history.push("/collections");
  };

  return (
    <div className="delete_landmark_form">
      <form onSubmit={handleSubmit}>
        <h2>Are you sure you want to delete Landmark?</h2>
        <button
          className="confirm_delete"
          type="submit"
          style={{ cursor: "pointer" }}
        >
          CONFIRM
        </button>
      </form>
      <button
        className="cancel_button"
        type="button"
        onClick={() => setDeleteModal(false)}
        style={{ cursor: "pointer" }}
      >
        CANCEL
      </button>
    </div>
  );
}
