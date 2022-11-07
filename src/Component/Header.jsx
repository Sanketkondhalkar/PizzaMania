import React from "react";
import "../Component/Header.css";

const Header = () => {
  return (
    <>
      <div class="row Header-row">
        <div className="col-1"></div>
        <div className="col-1">
          <ul className="Header_enclouser">
            <li>
              <i class="fa-brands fa-square-facebook fs-4 "></i>
            </li>
            <li>
              <i class="fa-brands fa-square-twitter fs-4 ms-2 "></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin fs-4 ms-2"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-youtube fs-4 ms-2 "></i>
            </li>
            <li>
              <i class="fa-brands fa-square-instagram fs-4 ms-2"></i>
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2">
          <ul className="Header_enclouser">
            <li>
              <i class="fa-sharp fa-solid fa-clock fs-4 ms-2"></i>
            </li>
            <li className="fs-8 ms-2 text">Monday Closed</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="Header_enclouser">
            <li>
              <i class="fa-solid fa-map-location-dot fs-4 ms-2"></i>
            </li>
            <li className="fs-8 ms-2 text">Ghansoli,Near Mbp</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="Header_enclouser">
            <li>
              <i class="fa-solid fa-phone-volume fs-4 ms-2"></i>
            </li>
            <li className="fs-8 ms-2 text">+91 8779 5949 25</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
