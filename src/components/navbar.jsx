import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">
            Prueba<b>React</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/index">
                  <a className="nav-link" href="#/">
                    Inicio
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/nosotros">
                  <a className="nav-link" href="#/">
                    Nosotros
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/dashBoard">
                  <a className="nav-link" href="/dashBoard">
                    Dashboard
                  </a>
                </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <div class="input-group form-group search">
                <div className="input-group-prepend  ">
                  <span className="input-group-text">🔍</span>
                </div>
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="conctent-button">
                <input
                  className="btn btn-secondary my-2 my-sm-0"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
