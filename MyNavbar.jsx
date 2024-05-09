
import { useState } from 'react';
import React from 'react';
import logo from '../images/download.png'
import { Link } from 'react-router-dom';
function MyNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className='bg-transparent'>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md fixed-top">
          <Link to="/" className="navbar-brand ms-3">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler me-3"
            type="button"
            onClick={handleToggleNavbar}
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ms-3 me-3 ${showNavbar ? 'show' : ''}`}
            id="mynavbar"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/Project" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact us</Link>
              </li>
              <li className="nav-item">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn btn-light" type="submit">
                    <i className="bi bi-search" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MyNavbar;



