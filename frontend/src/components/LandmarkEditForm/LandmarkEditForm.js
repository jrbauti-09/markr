import React, { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editLandmark } from "../../store/landmark";
import { getUserLandmarks } from "../../store/usercollection";
import Search from "../LandmarkForm/Search";
import poweredByGoogle from "../../images/powered_by_google_on_white_hdpi.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LandmarkEditForm.css";

export default function LandmarkEditForm() {
  const { landMarkId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // array of user collections.
  const userCollection = useSelector((state) =>
    Object.values(state.collection)
  );

  const userSession = useSelector((state) => {
    return state.session.user;
  });

  const landMarkToEdit = userCollection.find((landmark) => {
    // console.log(landmark.id, landMarkId);
    return landmark.id.toString() === landMarkId;
  });

  const [userId, setUserId] = useState(landMarkToEdit?.userId);
  const [name, setName] = useState(landMarkToEdit?.name);
  const [imageUrl, setImageUrl] = useState(landMarkToEdit?.imageUrl);
  const [description, setDescription] = useState(landMarkToEdit?.description);
  const [lat, setLat] = useState(landMarkToEdit?.lat);
  const [lng, setLng] = useState(landMarkToEdit?.lng);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      return;
    }

    const data = {
      userId,
      name,
      imageUrl,
      description,
      lat,
      lng,
    };

    const updatedLandMark = await dispatch(editLandmark(landMarkId, data));

    // history.push(`/landmarks/${landMarkId}`);

    // todo. dispatch to update thunk.
  };

  useEffect(() => {
    const errors = [];
    if (!name?.length) errors.push("Please include Landmark name.");
    if (!imageUrl?.match(/^https?:\/\/.+\/.+$/) && imageUrl?.length > 0)
      errors.push("This is not a valid url.");
    if (!lat) errors.push("Please provide latitude coordinates.");
    if (!lng) errors.push("Please provide longitude coordinates.");
    setValidationErrors(errors);
  }, [name, imageUrl, lat, lng]);

  useEffect(() => {
    dispatch(getUserLandmarks(userSession.id));
  }, [dispatch]);

  const notify = () => {
    // if no errors.
    if (validationErrors.length > 0) {
      toast.error("Invalid form, please see error list.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Successful edit, redirecting to details page..", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        // console.log("Your timeout works!");
        history.push(`/landmarks/${landMarkId}`);
      }, 3000);
    }
  };

  const handleClick = () => {
    history.push(`/landmarks/${landMarkId}`);
  };

  return (
    <>
      <div className="master_form_div">
        <div className="landmark_form_container">
          <form className="landmark_form" onSubmit={handleSubmit}>
            <div className="div_header_form">
              <h4 className="header_title">Edit Landmark!</h4>
            </div>
            <ul className="error_container">
              {validationErrors.length > 0 &&
                validationErrors.map((error) => (
                  <li className="error" key={error}>
                    {error}
                  </li>
                ))}
            </ul>
            <label className="label_form">Name of Landmark:</label>
            <div className="form_element">
              <input
                type="text"
                value={name}
                className="landmark_form_input"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name Of Landmark"
              ></input>
            </div>
            <label className="label_form">Image Url:</label>
            <div className="form_element">
              <input
                type="text"
                value={imageUrl}
                className="landmark_form_input"
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://wallpaperaccess.com/full/276843.jpg"
              ></input>
            </div>
            <label className="label_form">Description:</label>
            <div className="form_element">
              <textarea
                type="text"
                value={description}
                className="landmark_form_input textarea"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description of landmark here.."
              ></textarea>
            </div>
            <h2 style={{ padding: "10px" }}>
              Please use the search input above the google map
              <br></br>for coordinates.
            </h2>
            <label className="label_form">Latitude coordinate:</label>
            <div className="form_element">
              <input
                type="text"
                value={lat}
                className="landmark_form_input"
                onChange={(e) => setLat(e.target.value)}
                placeholder="36.0544"
              ></input>
            </div>
            <label className="label_form">Longitude coordinate:</label>
            <div className="form_element">
              <input
                type="text"
                value={lng}
                className="landmark_form_input"
                onChange={(e) => setLng(e.target.value)}
                placeholder="112.1401"
              ></input>
            </div>
            <button
              className="post_landmark_form_button"
              type="submit"
              onClick={notify}
            >
              Edit Landmark!
            </button>
          </form>
          <div>
            <ToastContainer
              onClick={handleClick}
              position="top-right"
              autoClose={2000}
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
        </div>
        <div>
          <Search setLat={setLat} setLng={setLng} />
          <div className="powered_by_google_container">
            <img
              src={poweredByGoogle}
              alt="Google api"
              className="powered_by_google"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
