import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./LandmarkReviewForm.css";

export default function LandmarkReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [review, setReview] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const userSession = useSelector((state) => state.session.user);

  // landMarkId will be passed down from previous prop.
  // handleSubmit function.
  // console.log(landMarkId);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // window.alert("Review posted.");
    // const data = {
    //   userId: userSession.id,
    //   landMarkId,
    //   review,
    // };
    // dispatch(postReview(landMarkId, data));
    // setReview("");
    // setValidationErrors([]);
  };

  useEffect(() => {
    const errors = [];
    if (!review.length) errors.push("Please include a review.");
    setValidationErrors(errors);
  }, [review]);

  return (
    <div className="review_form_container">
      <div className="review_form_holder">
        <form className="review_form" onSubmit={handleSubmit}>
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
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Add review here."
            ></input>
          </div>
          <button
            className="post_landmark_form_button"
            type="submit"
            disabled={validationErrors.length > 0}
          >
            Post Review!
          </button>
        </form>
      </div>
    </div>
  );
}
