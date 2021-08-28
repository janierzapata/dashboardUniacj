
import './App.css';
import './index.css';
import { Navbar } from './components/navbar'
import { Index } from './components/index'
import { NotFound } from './404'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Login from './components/login/login';
import { Nosotros } from './components/nosotros/nosotros';

import React, { useState, useEffect } from 'react';
import DashBoard from '../src/components/dashBoard/index';

import { applyInterceptor } from './utils/httpClient/index'

applyInterceptor();


function App() {


  const [conectado, setConectado] = useState(false);
  

 
    useEffect(() => {

      const sesion = window.localStorage.getItem('logged');

      if (sesion ) {
        setConectado(true);
      }
    }, []);
  


  function acceso(estado) {
    setConectado(estado); 
  }


  return (
    conectado ?
      <>
        <Router>
          <Switch>
            <Route path="/dashBoard">

              <DashBoard />

            </Route>
          </Switch>
        </Router>
      </> :

      <>
        <Router>
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route path="/nosotros">
              <div className="body">
                <Nosotros />
              </div>
            </Route>
            <Route path="/dashBoard">
              <div className="body">
                <Login acceso={acceso} />
              </div>
            </Route>
            <Route path="/index" >
              <div className="body">
                <Index />
              </div>
            </Route>
            <Route path="/" exact>
              <div className="body">
                <Index />
              </div>
            </Route>
            <Route path="*">
              <div className="body">
                <NotFound/>
              </div>
            </Route>
          </Switch>

        </Router>


      </>
  );
}

export default App;
