import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./LandmarkEditForm.css";

export default function LandmarkEditForm() {
  const { landMarkId } = useParams();
  const dispatch = useDispatch();

  // array of user collections.
  const userCollection = useSelector((state) =>
    Object.values(state.collection)
  );

  const landMarkToEdit = userCollection.find((landmark) => {
    // console.log(landmark.id, landMarkId);
    return landmark.id.toString() === landMarkId;
  });

  return <div>LandmarkEditForm</div>;
}
