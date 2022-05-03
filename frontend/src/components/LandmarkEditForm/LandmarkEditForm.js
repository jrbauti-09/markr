import React, { useEffect, useState } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editLandmark } from "../../store/landmark";
import Search from "../LandmarkForm/Search";

import "./LandmarkEditForm.css";

export default function LandmarkEditForm() {
  const { landMarkId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // array of user collections.
  const userCollection = useSelector((state) =>
    Object.values(state.collection)
  );

  const landMarkToEdit = userCollection.find((landmark) => {
    // console.log(landmark.id, landMarkId);
    return landmark.id.toString() === landMarkId;
  });

  const [userId, setUserId] = useState(landMarkToEdit.userId);
  const [name, setName] = useState(landMarkToEdit.name);
  const [imageUrl, setImageUrl] = useState(landMarkToEdit.imageUrl);
  const [description, setDescription] = useState(landMarkToEdit.description);
  const [lat, setLat] = useState(landMarkToEdit.lat);
  const [lng, setLng] = useState(landMarkToEdit.lng);
  const [validationErrors, setValidationErrors] = useState([]);

  //   console.log(userId, name, imageUrl, description, lat, lng);

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.alert("Success.");

    const data = {
      userId,
      name,
      imageUrl,
      description,
      lat,
      lng,
    };

    const updatedLandMark = await dispatch(editLandmark(landMarkId, data));

    history.push(`/landmarks/${landMarkId}`);

    // todo. dispatch to update thunk.
  };

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Please include LandMark name.");
    if (!imageUrl.match(/^https?:\/\/.+\/.+$/) && imageUrl.length > 0)
      errors.push("This is not a valid url.");
    if (!lat.length) errors.push("Please provide latitude coordinates.");
    if (!lng.length) errors.push("Please provide longitude coordinates.");
    setValidationErrors(errors);
  }, [name, imageUrl, lat, lng]);

  return (
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
          <div className="form_element">
            <input
              type="text"
              value={name}
              className="landmark_form_input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name Of Landmark"
            ></input>
          </div>
          <div className="form_element">
            <input
              type="text"
              value={imageUrl}
              className="landmark_form_input"
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://wallpaperaccess.com/full/276843.jpg"
            ></input>
          </div>
          <div className="form_element">
            <textarea
              type="text"
              value={description}
              className="landmark_form_input"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of landmark here.."
            ></textarea>
          </div>
          <div className="form_element">
            <input
              type="text"
              value={lat}
              className="landmark_form_input"
              onChange={(e) => setLat(e.target.value)}
              placeholder="36.0544"
            ></input>
          </div>
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
            disabled={validationErrors.length > 0}
          >
            Post New Landmark!
          </button>
        </form>
      </div>
      <Search setLat={setLat} setLng={setLng} />
    </div>
  );
}
