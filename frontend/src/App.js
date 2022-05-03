import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./components/MainPage/MainPage.js";
import Navigation from "./components/Navigation";
import Map from "./components/Maps/Map";
import Dashboard from "./components/Dashboard/Dashboard";
import LandmarkDetail from "./components/LandmarkDetail/LandmarkDetail";
import LandmarkForm from "./components/LandmarkForm/LandmarkForm";
import Collections from "./components/Collections/Collections";
import LandmarkEditForm from "./components/LandmarkEditForm/LandmarkEditForm";
import LandmarkReviewForm from "./components/LandmarkReview/LandmarkReviewForm";
import LandmarkReviewEditForm from "./components/LandmarkReview/LandmarkReviewEditForm";
import * as sessionActions from "./store/session";

//Google api
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const string =
  "A-I-z-a-S-y-C-w-m-w-T-Q-L-Q-R-J-K-Z-D-H-P-V-3-1-b-o-Z-K-d-S-D-K-z-C-y-Y-p-F-g";
const string2 = string.split("-").join("");

function App() {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoad(true));
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: string2,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <Navigation isLoad={isLoad} />
      {isLoad && (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/maps">
            <Map />
          </Route>
          <Route path="/reviews/edit/:reviewId">
            <LandmarkReviewEditForm />
          </Route>
          <Route path="/landmark/post">
            <LandmarkForm />
          </Route>
          <Route path="/landmark/review/:landMarkId">
            <LandmarkReviewForm />
          </Route>
          <Route path="/landmark/edit/:landMarkId">
            <LandmarkEditForm />
          </Route>
          <Route path="/landmarks/:landMarkId">
            <LandmarkDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
