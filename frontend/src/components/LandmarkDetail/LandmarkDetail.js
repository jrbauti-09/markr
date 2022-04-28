import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLandmarks } from "../../store/landmark";
import { getReviews } from "../../store/review";

// We will useParams to find landmark Id.
// will use the .find method to locate the landmark we want.

export default function LandmarkDetail() {
  const { landMarkId } = useParams();
  const dispatch = useDispatch();

  const landMarks = useSelector((state) => Object.values(state.landmarks));
  // we can filter through reviews possibly.
  const reviews = useSelector((state) => Object.values(state.reviews));

  //   console.log(reviews)
  useEffect(() => {
    dispatch(getLandmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews(landMarkId));
  }, [dispatch]);

  // Get Landmark based on params.
  // This works.
  const landMark = landMarks.find((item) => {
    return item.id == landMarkId;
  });

  // reviews and landMark.

  return <div>LandmarkDetail</div>;
}
