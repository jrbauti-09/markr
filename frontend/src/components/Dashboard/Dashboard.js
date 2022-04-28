import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLandmarks } from "../../store/landmark";
import "./Dashboard.css";

// After user logins, they will be sent to the dashboard which has the landMark images.

// each image has a link which will direct them detail page which includes the landmark's review. User can also post a review.

export default function Dashboard() {
  const dispatch = useDispatch();

  // an array of objects of all landmarks.
  const landMarks = useSelector((state) => Object.values(state.landmarks));

  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);
  return (
    <div>
      {landMarks.map((landmark) => {
        return <img className="image_tile" src={landmark.imageUrl}></img>;
      })}
    </div>
  );
}
