import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addLandmark } from "../../store/landmark";
import Search from "./Search";
import poweredByGoogle from "../../images/powered_by_google_on_white_hdpi.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LandmarkForm.css";

export default function LandmarkForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  // const [imageUrl, setImageUrl] = useState(""); pre aws
  const [validFile, setValidFile] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const userSession = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      return;
    }

    const data = {
      userId: userSession.id,
      name,
      imageUrl,
      description,
      lat,
      lng,
    };

    dispatch(addLandmark(data));
  };

  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Please include Landmark name.");
    if (!validFile) errors.push("Selected file invalid");
    if (!lat) errors.push("Please provide latitude coordinates.");
    if (!lng) errors.push("Please provide longitude coordinates.");
    setValidationErrors(errors);
  }, [name, imageUrl, lat, lng, validFile]);

  const notify = () => {
    if (validationErrors.length > 0) {
      toast.error("Invalid information sent. Please see list of errors.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Landmark posted, redirecting back to the explore page..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        // console.log("Your timeout works!");
        history.push("/dashboard");
      }, 6000);
    }
  };

  const handleClick = () => {
    history.push("/dashboard");
  };

  const uploadFile = async (e) => {
    const file = await e.target.files[0];
    const fileType = await file?.type;
    const fileTypeArray = await fileType.split("/");
    if (fileTypeArray[0] !== "image") {
      setValidFile(false);
    } else {
      setValidFile(true);
      setValidationErrors([]);
      setImageUrl(file);
    }
  };

  return (
    <div className="master_form_div">
      <div className="landmark_form_container">
        <form className="landmark_form" onSubmit={handleSubmit}>
          <div className="div_header_form">
            <h4 className="header_title">Post A New Landmark!</h4>
          </div>
          <div className="error_container_div">
            <ul className="error_container">
              {validationErrors.length > 0 &&
                validationErrors.map((error) => (
                  <li className="error" key={error}>
                    {error}
                  </li>
                ))}
            </ul>
          </div>
          <label className="label_form">Name of Landmark:</label>
          <div className="form_element">
            <input
              type="text"
              className="landmark_form_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name Of Landmark"
            ></input>
          </div>
          <label className="label_form">Image Url:</label>
          <div className="form_element">
            <input
              type="file"
              className="landmark_form_input"
              onChange={uploadFile}
              accept="image/*"
            ></input>
          </div>
          <label className="label_form">Description:</label>
          <div className="form_element">
            <textarea
              type="text"
              value={description}
              className="landmark_form_input textarea"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of landmark here.."
            ></textarea>
          </div>
          <h2 style={{ padding: "10px" }}>
            Please use the search input above the google map
            <br></br>for coordinates.
          </h2>
          <label className="label_form">Latitude coordinate:</label>
          <div className="form_element">
            <input
              type="text"
              value={lat}
              className="landmark_form_input"
              onChange={(e) => setLat(e.target.value)}
              placeholder="36.0544"
            ></input>
          </div>
          <label className="label_form">Longitude coordinate:</label>
          <div className="form_element">
            <input
              type="text"
              value={lng}
              className="landmark_form_input"
              onChange={(e) => setLng(e.target.value)}
              placeholder="112.1401"
            ></input>
          </div>
          <button
            className="post_landmark_form_button"
            type="submit"
            onClick={notify}
            // disabled={validationErrors.length > 0}
          >
            Post New Landmark!
          </button>
        </form>
        <div>
          {/* <button onClick={notify}>Notify!</button> */}
          <ToastContainer
            onClick={handleClick}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <div>
        <Search setLat={setLat} setLng={setLng} />
        <div className="powered_by_google_container">
          <img
            src={poweredByGoogle}
            alt="Google api"
            className="powered_by_google"
          ></img>
        </div>
      </div>
    </div>
  );
}
