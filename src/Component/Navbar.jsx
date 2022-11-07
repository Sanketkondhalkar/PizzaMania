import React from "react";
import "../Component/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://templates.hibootstrap.com/fafo/default/assets/images/logo.png"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-ul navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fa-solid fa-cart-shopping">
                  <span class="badge bg-secondary ms-2">0</span>
                </i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user" title="sanket kondhalkar"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <i
                      class="fa-solid fa-user-pen "
                      style={{ color: "black" }}
                    ></i>
                    <span className="ms-2"> Account </span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i
                      class="fa-solid fa-right-from-bracket "
                      style={{ color: "black" }}
                    ></i>
                    <span className="ms-2">Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
