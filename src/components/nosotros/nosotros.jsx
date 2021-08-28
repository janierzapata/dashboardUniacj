import React from "react";
import { Politica } from "./components/politica";
import { Mision } from "./components/mision";
import { Vision } from "./components/vision";

export const Nosotros = () => {
  return (
    <div className="container-2">
      <ul class="nav nav-tabs">
      <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#mision">
            Mision
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " data-bs-toggle="tab" href="#vision">
            Vision
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " data-bs-toggle="tab" href="#politica">
            Politica de Calidad
          </a>
        </li>
      </ul>
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade active show" id="mision">
          <Mision />
        </div>

        <div class="tab-pane fade " id="vision">
          <Vision />
        </div>

        <div class="tab-pane fade " id="politica">
          <Politica />
        </div>
      </div>
    </div>
  );
};
