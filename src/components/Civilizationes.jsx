import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Civilizations = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    document.title = "Civilizaciones";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const datos = await data.json();
    console.log(datos);
    setUsuarios(datos.civilizations);
  };

  return (
    <div className="container">
      <p>
        Obteniendo los datos de una API{" "}
        <code>
          https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations
        </code>{" "}
        <br />
        Puedes obtener más detalles cliqueando sobre el nombre de una
        civilización...
      </p>
      <div>
        <h2 className="text-center">Civilizaciones</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">EXPANSIÓN</th>
              <th scope="col">TIPO DE ARMA</th>
              <th scope="col">BONUS DEL EQUIPO</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item, index) => (
              /*  <li key={item.id}>
              {item.id} - {item.name}
            </li>
            */
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/civilizaciones/${item.id}`}> {item.name}</Link>
                </td>
                <td>{item.expansion}</td>
                <td>{item.army_type}</td>
                <td>{item.team_bonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Civilizations;
