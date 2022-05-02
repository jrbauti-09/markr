import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";

import "./LandmarkReviewEditForm.css";

// TODO: import thunk.

export default function LandmarkReviewEditForm() {
  const { reviewId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // we don't need to update userId.
  // no need to update landMarkId.

  const reviewArray = useSelector((state) => Object.values(state.reviews));
  const landMarkObject = useSelector((state) => state.landmarks);
  const landMarkId = reviewArray[0].landMarkId;
  const landMark = landMarkObject[landMarkId];

  const reviewToEdit = reviewArray.find((review) => {
    return review.id === parseInt(reviewId);
  });

  const [review, setReview] = useState(reviewToEdit.review);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.alert("Review was edited.");

    const data = {
      review,
    };
  };

  useEffect(() => {
    const errors = [];
    if (!review.length) errors.push("Please include a review.");
    setValidationErrors(errors);
  }, [review]);

  return (
    <>
      <div className="review_edit_form_superdiv">
        <div>
          <img
            className="review_edit_form_image"
            src={landMark.imageUrl}
            alt=""
          ></img>
        </div>
        <div className="review_edit_main_container">
          <div className="review_edit_form_container">
            <form className="review_edit_form_holder" onSubmit={handleSubmit}>
              <div className="">
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Edit your review for {landMark.name}!
                </h1>
              </div>
              <ul className="error_container">
                {validationErrors.length > 0 &&
                  validationErrors.map((error) => (
                    <li
                      className="error"
                      key={error}
                      style={{
                        listStyle: "none",
                        marginLeft: "10px",
                        marginTop: "5px",
                        marginBottom: "2px",
                        color: "red",
                      }}
                    >
                      {error}
                    </li>
                  ))}
              </ul>
              <label style={{ padding: "10px" }}>Review text below:</label>
              <textarea
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                style={{
                  width: "480px",
                  height: "100px",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "8px",
                }}
              ></textarea>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="review_edit_form_button"
                  type="submit"
                  disabled={validationErrors.length > 0}
                >
                  Edit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
