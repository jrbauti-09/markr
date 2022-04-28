import React from "react";
import "./MainPage.css";
import paris from "../../images/Paris.jpg";
import china from "../../images/Great-wall.jpg";
import rio from "../../images/Rio-de-janeiro.jpg";

export default function MainPage() {
  return (
    <>
      <div className="slideshow">
        <div className="slideshow-item">
          <img src={paris} alt=""></img>
          <div className="slideshow-item-text">
            <h5>Paris, FR</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="slideshow-item">
          <img src={china} alt=""></img>
          <div className="slideshow-item-text">
            <h5>Great Wall, CN</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="slideshow-item">
          <img src={rio} alt=""></img>
          <div className="slideshow-item-text">
            <h5>Rio de janeiro, BR</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <footer className="main_footer">
        <div className="footer_container">
          <div className="footer_top_row">
            <ul className="footer_ul">
              <li className="footer_li">Redux</li>
              <li className="footer_li">React</li>
              <li className="footer_li">Javascript</li>
              <li className="footer_li">PostgreSQL</li>
              <li className="footer_li">Express</li>
              <li className="footer_li">HTML</li>
              <li className="footer_li">CSS</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
