import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user";
import "./LandmarkReview.css";

export default function LandmarkReview({ reviews }) {
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
          const userReview = usersArray.find((user) => {
            //eslint-disable-next-line
            return user.id == review.userId;
          });

          return (
            <>
              <li className="review" key={review.id}>
                {review.review}
              </li>
              <span className="review_user">From: {userReview.username}</span>
              <span>{review.createdAt.slice(0, 10)}</span>
            </>
          );
        })}
      </ul>
    </div>
  );
}
