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

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Need to fix FROM : UserName.
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
