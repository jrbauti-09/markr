import React from "react";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div className="main_div"></div>
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
