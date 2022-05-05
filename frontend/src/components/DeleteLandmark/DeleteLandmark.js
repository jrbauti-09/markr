import React from "react";
import "./DeleteLandmark.css";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { deleteLandmark } from "../../store/landmark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteLandmark(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  let setDeleteModal = props.set;
  let landMarkId = props.props;
  let confirmDelete = props.confirmDelete;
  let setConfirmDelete = props.setConfirmDelete;
  let setModel = props.setModel;

  //   console.log(landMarkId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Deleting landmark...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      setDeleteModal(false);
      setConfirmDelete(!confirmDelete);
      setModel(false);
      // TO DO, dispatch to THUNK.
      dispatch(deleteLandmark(landMarkId));
      // history.push("/collections");
      window.location.reload(true);
    }, 3000);
  };

  const handleClick = () => {
    history.push(`/collections`);
  };

  return (
    <div className="delete_landmark_form">
      <form onSubmit={handleSubmit}>
        <div className="header_delete_div">
          <h2 className="header_delete_landmark">
            Are you sure you want to delete Landmark?
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="confirm_delete"
            type="submit"
            style={{ cursor: "pointer" }}
          >
            CONFIRM
          </button>
        </div>
      </form>
      <div>
        <ToastContainer
          onClick={handleClick}
          position="top-right"
          className="delete_toast"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          style={{ fontSize: "medium" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="cancel_button"
          type="button"
          onClick={() => setDeleteModal(false)}
          style={{ cursor: "pointer" }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
