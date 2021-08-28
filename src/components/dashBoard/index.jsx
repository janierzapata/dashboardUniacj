import "../dashBoard/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Sidebar } from "../dashBoard/components/sidebar/sidebar";
import {FirstMachine}  from "./components/content/machines/machineOne";

export default function DashBoard(params) {
  return (
    <div className="dashboard">
      <Router>
        <div className="sidebar ">
          <Sidebar />
        </div>
        <Switch>
          <Route path="/dashboard/Inicio" exact={true}>
            <div className="content">
              <h1>Ingreso a inicio</h1>
            </div>
          </Route>
          <Route path="/dashboard/Maquina1"  exact={true}>
            <div className="content">
              <FirstMachine />
            </div>
          </Route>
          <Route path="/dashboard/maquina2">
            <div className="content">
              <h1>entro a la maquina 2</h1>
            </div>
          </Route>
          <Route path="/dashboard/maquina3">
            <div className="content">
              <h1>entro a la maquina 3</h1>
            </div>
          </Route>
          <Route path="/dashboard/valvula1">
            <div className="content">
              <h1>entro a la valvula 1</h1>
            </div>
          </Route>
          <Route path="/dashboard/valvula2">
            <div className="content">
              <h1>entro a la valvula 2</h1>
            </div>
          </Route>
          <Route path="/dashboard/valvula3">
            <div className="content">
              <h1>entro a la valvula 3</h1>
            </div>
          </Route>
          <Route path="/dashboard">
          <div className="content">
              <h1>Ingreso a inicio</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
