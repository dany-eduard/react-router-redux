import React, { useEffect, useState } from "react";

const PaginaUno = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    document.title = "Pagina Uno";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);
    setUsuarios(users);
  };

  return (
    <div className="container">
      <h1>Pagina Uno</h1>
      <p>
        Obteniendo los datos de una API{" "}
        <code>https://jsonplaceholder.typicode.com/users</code> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
        commodi nisi. Nulla necessitatibus deserunt inventore natus impedit
        temporibus error aperiam eveniet neque vero delectus nobis officia minus
        totam dolor laboriosam accusamus asperiores amet, consequuntur, ullam
        sunt ducimus doloribus maxime. Adipisci, architecto quae eum ipsa
        quaerat quod aliquam corporis deleniti.
      </p>
      <div>
        <h2 className="text-center">Usuarios</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">TELEFONO</th>
              <th scope="col">SITIO WEB</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item, index) => (
              /*  <li key={item.id}>
              {item.id} - {item.name}
            </li>
            */
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaginaUno;
