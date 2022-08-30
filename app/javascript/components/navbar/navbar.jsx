import React from "react";
import handleMobileDropdown from "../../common/handleMobileDropdown";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="/" className="logo">
          <img
            src="./../../../assets/images/logo/logo-dark.png"
            alt="FBM's logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">FBM</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
