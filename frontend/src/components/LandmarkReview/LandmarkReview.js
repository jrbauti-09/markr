import React from "react";
import "./LandmarkReview.css";

export default function LandmarkReview({ reviews }) {
  // console.log(reviews, "Review component");
  // reviews is an array of reviews for the specific landmark.

  return (
    <div className="review_list">
      <ul>
        {reviews.map((review) => {
          return (
            <>
              <li className="review" key={review.id}>
                {review.review}
              </li>
              <span className="review_user">From user</span>
            </>
          );
        })}
      </ul>
    </div>
  );
}
