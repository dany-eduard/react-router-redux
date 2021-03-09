import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import PaginaUno from "./PaginaUno";
import PaginaDos from "./PaginaDos";
import Contacto from "./Contacto";

export const Navbar = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Inicio
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/pageuno" className="nav-link">
                  Pagina Uno
                </Link>
                <Link to="/pagedos" className="nav-link">
                  Pagina dos
                </Link>
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <br />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/pageuno" exact>
            <PaginaUno />
          </Route>
          <Route path="/pagedos" exact>
            <PaginaDos />
          </Route>
          <Route path="/contacto" exact>
            <Contacto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
