import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLandmarks } from "../../store/landmark";
import Gallery from "../Gallery/Gallery";
import "./Dashboard.css";

// After user logins, they will be sent to the dashboard which has the landMark images.

// each image has a link which will direct them detail page which includes the landmark's review. User can also post a review.

export default function Dashboard() {
  return (
    <>
      <h1 className="dashboard_header" style={{ textAlign: "center" }}>
        LANDMARK GALLERY
        <div className="gallery_underline"></div>
      </h1>
      <Gallery />
    </>
  );
}
