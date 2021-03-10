import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Civilizacion = () => {
  const { id } = useParams(); // Se obtiene el parámetro id de la URL
  console.log(id);
  const [civilizacion, setCivilizacion] = useState([]);

  useEffect(() => {
    document.title = `Civilización ${civilizacion.name}`;
    obtenerDatos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
    );
    const datos = await data.json();
    console.log(datos);
    setCivilizacion(datos);
  };

  return (
    <div className="container">
      <h3>{civilizacion.name}</h3>
      <ul>
        <li>EXPANSIÓN: {civilizacion.expansion}</li>
        <li>TIPO DE ARMA: {civilizacion.army_type}</li>
        <li>BONUS DE LA CIVILIZACIÓN: {civilizacion.team_bonus}</li>
      </ul>
      <Link to="/civilizaciones">
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
};

export default Civilizacion;
