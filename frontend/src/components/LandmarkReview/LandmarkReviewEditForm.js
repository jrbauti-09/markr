import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { editReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LandmarkReviewEditForm.css";

export default function LandmarkReviewEditForm() {
  const { reviewId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // we don't need to update userId.
  // no need to update landMarkId.

  const reviewArray = useSelector((state) => Object.values(state.reviews));
  const landMarkObject = useSelector((state) => state.landmarks);
  const landMarkId = reviewArray[0]?.landMarkId;
  const landMark = landMarkObject[landMarkId];

  const reviewToEdit = reviewArray.find((review) => {
    return review.id === parseInt(reviewId);
  });

  const [review, setReview] = useState(reviewToEdit?.review);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      return;
    }

    const data = {
      review,
    };

    // TODO: dispatch to thunk.

    const updatedReview = await dispatch(editReview(reviewToEdit.id, data));
  };

  const handleDelete = async (e) => {
    // window.alert("Review was deleted.");
    //place id of review.
    toast.success("Successful delete, redirecting to details page..", {
      position: "top-right",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      dispatch(deleteReview(reviewId));
      history.push(`/landmarks/${landMarkId}`);
    }, 2700);
  };

  useEffect(() => {
    const errors = [];
    if (!review.length) errors.push("Please include a review.");
    setValidationErrors(errors);
  }, [review]);

  const notify = () => {
    // if no errors.
    if (validationErrors.length > 0) {
      toast.error("Invalid review, please see error list.", {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Successful edit, redirecting to details page..", {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        // console.log("Your timeout works!");
        history.push(`/landmarks/${landMarkId}`);
      }, 2700);
    }
  };

  const handleClick = () => {
    history.push(`/landmarks/${landMarkId}`);
  };

  return (
    <>
      <div className="review_edit_form_superdiv">
        <div>
          <Link to={`/landmarks/${landMarkId}`}>
            <img
              className="review_edit_form_image"
              src={landMark?.imageUrl}
              alt=""
            ></img>
          </Link>
        </div>
        <div className="review_edit_main_container">
          <div className="review_edit_form_container">
            <form className="review_edit_form_holder" onSubmit={handleSubmit}>
              <div className="">
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Edit your review for {landMark?.name}!
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <button
                  className="review_edit_form_button"
                  type="submit"
                  disabled={validationErrors.length > 0}
                  onClick={notify}
                >
                  Edit Review
                </button>
              </div>
            </form>
            <div>
              <ToastContainer
                onClick={handleClick}
                position="top-right"
                autoClose={1700}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="review_edit_form_delete_button"
                disabled={validationErrors.length > 0}
                onClick={() => handleDelete()}
              >
                Delete Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
