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
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoad(true));
  }, [dispatch]);

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
          <Route path="/landmark/post">
            <LandmarkForm />
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
