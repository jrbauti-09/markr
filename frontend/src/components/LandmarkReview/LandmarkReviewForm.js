import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { postReview } from "../../store/review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LandmarkReviewForm.css";

export default function LandmarkReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { landMarkId } = useParams();
  const [review, setReview] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const userSession = useSelector((state) => state.session.user);
  const landMarkObject = useSelector((state) => state.landmarks);
  const landMark = landMarkObject[landMarkId];

  // console.log(landMarkId);

  // landMarkId will be passed down from previous prop.
  // handleSubmit function.
  // console.log(landMarkId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      return;
    }

    const data = {
      userId: userSession.id,
      landMarkId,
      review,
    };

    dispatch(postReview(data));
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
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Successful edit, redirecting to details page..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        // console.log("Your timeout works!");
        history.push(`/landmarks/${landMarkId}`);
      }, 6000);
    }
  };

  const handleClick = () => {
    history.push(`/landmarks/${landMarkId}`);
  };

  return (
    <div className="review_post_form_superdiv">
      <div>
        <Link to={`/landmarks/${landMark.id}`}>
          <img
            className="review_edit_form_image"
            src={landMark.imageUrl}
            style={{ border: "1.5px solid beige" }}
          ></img>
        </Link>
      </div>
      <div className="review_edit_main_container">
        <div className="review_edit_form_container">
          <form className="review_edit_form_holder" onSubmit={handleSubmit}>
            <div className="">
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                Post your review for {landMark.name}!
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
                      marginLeft: "15px",
                      marginTop: "5px",
                    }}
                  >
                    {error}
                  </li>
                ))}
            </ul>
            <div className="form_element">
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
                placeholder="Add review here."
              ></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="post_landmark_form_button"
                type="submit"
                onClick={notify}
              >
                Post Review!
              </button>
            </div>
          </form>
          <div>
            <ToastContainer
              onClick={handleClick}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
}
