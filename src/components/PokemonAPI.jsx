import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokesAccion, siguientePokesAccion } from "../redux/pokeDucks";

const PokemonAPI = () => {
  useEffect(() => {
    document.title = "Pokemon API";
  });
  const [show, setShow] = useState(true); // Mostrar y ocultar botones
  const dispatch = useDispatch();

  const pokemons = useSelector((store) => store.pokes.datos);
  console.log(pokemons);

  function obtenerDatosOcultarBtn() {
    dispatch(obtenerPokesAccion());
    setShow(!show);
  }

  return (
    <div className="container">
      <p>
        Redux Ducks, consumiendo la API de{" "}
        <code>https://pokeapi.co/api/v2/pokemon?offset=0&limit=20</code> para
        mostrar Pokémones en lita.
      </p>

      <br></br>

      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <br></br>
      {show ? (
        <button
          onClick={() => obtenerDatosOcultarBtn()}
          type="button"
          className="btn btn-success"
        >
          Obtener Pokémones
        </button>
      ) : (
        <button
          onClick={() => dispatch(siguientePokesAccion())}
          type="button"
          className="btn btn-warning"
        >
          Ver más
        </button>
      )}
    </div>
  );
};

export default PokemonAPI;
