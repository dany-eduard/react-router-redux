import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import PaginaUno from "./PaginaUno";
import PaginaDos from "./PaginaDos";
import Contacto from "./Contacto";
import Civilizationes from "./Civilizationes";
import Civilizacion from "./Civilizacion";
import PokemonAPI from "./PokemonAPI";

import { Provider } from "react-redux";
import generateStore from "../redux/store";

export const Navbar = () => {
  const store = generateStore();
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
                <Link to="/civilizaciones" className="nav-link">
                  Civilizaciones
                </Link>
                <Link to="/pokemons" className="nav-link">
                  PokemonAPI
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
          <Route path="/civilizaciones" exact>
            <Civilizationes />
          </Route>
          <Route path="/civilizaciones/:id" exact>
            <Civilizacion />
          </Route>
          <Route path="/pokemons" exact>
            <Provider store={store}>
              <PokemonAPI />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
