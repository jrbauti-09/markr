import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// TODO: import thunk.

export default function LandmarkReviewEditForm() {
  const { reviewId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // we don't need to update userId.

  const reviewArray = useSelector((state) => Object.values(state.reviews));

  const landMarkId = reviewArray[0].landMarkId;

  return <div>LandmarkReviewEditForm</div>;
}
