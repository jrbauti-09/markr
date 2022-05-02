import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user";
import { Link } from "react-router-dom";
import "./LandmarkReview.css";

export default function LandmarkReview({ reviews, landMarkId }) {
  // console.log(reviews, "Review component");
  // reviews is an array of reviews for the specific landmark.

  const dispatch = useDispatch();
  const usersArray = useSelector((state) => Object.values(state.users));
  const userSession = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Need to fix FROM : UserName.

  // review button logic:
  // if userSession.id === review.userId
  // then we display buttons.

  return (
    <div className="review_list">
      <ul>
        {reviews.map((review) => {
          // review.userId gives us the user's Id.
          const index = review.userId - 1;
          let userInfo;
          if (!usersArray.length) {
            userInfo = usersArray[index];
          }
          let validUser;
          if (userInfo) {
            validUser = userInfo.username;
          }
          return (
            <>
              <li className="review" key={review.id}>
                {review.review}
              </li>
              <span className="review_user">From:</span>
              <span>{review.createdAt.slice(0, 10)}</span>
              <div
                className="review_edit_delete_button_container"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                {" "}
                <div
                  className={
                    userSession.id === review.userId ? "unhidden" : "hidden"
                  }
                >
                  <button className="review_edit_button">
                    <Link
                      to={`/reviews/edit/${review.id}`}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      EDIT
                    </Link>
                  </button>
                </div>
                <div
                  className={
                    userSession.id === review.userId ? "unhidden" : "hidden"
                  }
                >
                  <button className="review_edit_button">
                    <Link style={{ color: "black", textDecoration: "none" }}>
                      DELETE
                    </Link>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </ul>
      <div className="review_link_main_container">
        <div className="review_link_container">
          <Link className="review_link" to={`/landmark/review/${landMarkId}`}>
            Here
          </Link>
        </div>
      </div>
    </div>
  );
}
