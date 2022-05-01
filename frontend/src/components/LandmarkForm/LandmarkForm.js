import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addLandmark } from "../../store/landmark";

import "./LandmarkForm.css";

export default function LandmarkForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const userSession = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.alert("Landmark posted!");

    const data = {
      userId: userSession.id,
      name,
      imageUrl,
      description,
      lat,
      lng,
    };

    dispatch(addLandmark(data));
    history.push("/dashboard");
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
            <h4 className="header_title">Post A New Landmark!</h4>
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Name Of Landmark"
            ></input>
          </div>
          <div className="form_element">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://wallpaperaccess.com/full/276843.jpg"
            ></input>
          </div>
          <div className="form_element">
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of landmark here.."
            ></textarea>
          </div>
          <div className="form_element">
            <input
              type="text"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              placeholder="36.0544"
            ></input>
          </div>
          <div className="form_element">
            <input
              type="text"
              value={lng}
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
    </div>
  );
}
