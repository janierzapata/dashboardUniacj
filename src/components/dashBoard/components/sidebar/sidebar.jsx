import { Link } from "react-router-dom";
import "../../../../index.css";
import * as FaIcon from "react-icons/fa";
import * as GiIcon from "react-icons/gi";

import React from "react";

export const Sidebar = () => {
  function cerrar() {
    window.localStorage.removeItem("logged");
    window.location.reload();
  }
  function myFunction(id) {
    var ma1 = document.querySelector("#maq1");
    var ma2 = document.querySelector("#maq2");
    var ma3 = document.querySelector("#maq3");
    var va1 = document.querySelector("#val1");
    var va2 = document.querySelector("#val2");
    var va3 = document.querySelector("#val3");

    switch (id) {
      case "maq1":
        ma1.classList.add("active");
        ma2.classList.remove("active");
        ma3.classList.remove("active");
        va1.classList.remove("active");
        va2.classList.remove("active");
        va3.classList.remove("active");

        break;
      case "maq2":
        ma1.classList.remove("active");
        ma2.classList.add("active");
        ma3.classList.remove("active");
        va1.classList.remove("active");
        va2.classList.remove("active");
        va3.classList.remove("active");
        break;
      case "maq3":
        ma1.classList.remove("active");
        ma2.classList.remove("active");
        ma3.classList.add("active");
        va1.classList.remove("active");
        va2.classList.remove("active");
        va3.classList.remove("active");
        break;

      case "val1":
        va1.classList.add("active");
        va2.classList.remove("active");
        va3.classList.remove("active");
        ma1.classList.remove("active");
        ma2.classList.remove("active");
        ma3.classList.remove("active");
        break;
      case "val2":
        va1.classList.remove("active");
        va2.classList.add("active");
        va3.classList.remove("active");
        ma1.classList.remove("active");
        ma2.classList.remove("active");
        ma3.classList.remove("active");
        break;
      case "val3":
        va1.classList.remove("active");
        va2.classList.remove("active");
        va3.classList.add("active");
        ma1.classList.remove("active");
        ma2.classList.remove("active");
        ma3.classList.remove("active");
        break;
      case "inicio":
        va1.classList.remove("active");
        va2.classList.remove("active");
        va3.classList.remove("active");
        ma1.classList.remove("active");
        ma2.classList.remove("active");
        ma3.classList.remove("active");
        break;
    }
  }

  return (
    <div class="sidebar border-secondary mb-3 fixed-top salida ">
      <div class="card-header">
        <h3>
          Dash<b>Board</b>
        </h3>
      </div>
      <div className="card-sidebar">
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <Link
                  to="/dashboard/Inicio"
                  onClick={function () {
                    myFunction("inicio");
                  }}
                >
                  <button
                    class="accordion-button withoutArow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <FaIcon.FaHome className="me-2" />
                    Inicio
                  </button>
                </Link>
              </h2>
              <div
                id="collapseOne"
                class=" collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              ></div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Maquinas
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                      <Link
                        to="/dashboard/Maquina1"
                        class="nav-link"
                        role="button"
                        id="maq1"
                        onClick={function () {
                          myFunction("maq1");
                        }}
                      >
                        maquina 1
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link
                        to="/dashboard/Maquina2"
                        class="nav-link"
                        href="/dashboard/maquina2"
                        id="maq2"
                        onClick={function () {
                          myFunction("maq2");
                        }}
                      >
                        Maquina 2
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/dashboard/Maquina3"
                        class="nav-link "
                        href="/dashboard/maquina3"
                        id="maq3"
                        onClick={function () {
                          myFunction("maq3");
                        }}
                      >
                        Maquina 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Valvulas
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                      <Link
                        to="/dashboard/Valvula1"
                        class="nav-link "
                        id="val1"
                        onClick={function () {
                          myFunction("val1");
                        }}
                      >
                        Valvula 1
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link
                        to="/dashboard/Valvula2"
                        class="nav-link"
                        id="val2"
                        onClick={function () {
                          myFunction("val2");
                        }}
                      >
                        Valvula 2
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/dashboard/Valvula3"
                        class="nav-link "
                        id="val3"
                        onClick={function () {
                          myFunction("val3");
                        }}
                      >
                        Valvula 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingfour">
                <Link to="/dashboard/Inicio">
                  <button
                    class="accordion-button withoutArow exit"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="true"
                    aria-controls="collapsefour"
                    onClick={function () {
                      cerrar();
                    }}
                  >
                    <GiIcon.GiExitDoor className="me-2" />
                    Cerrar sesion
                  </button>
                </Link>
              </h2>
              <div
                id="collapsefour"
                class=" collapse show"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
