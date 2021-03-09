import React, { useEffect } from "react";

export const Inicio = () => {
  useEffect(() => {
    document.title = "Inicio";
  });

  return (
    <div className="container">
      <h1>Welcome to home</h1>
      <p>Éxito!</p>
    </div>
  );
};

export default Inicio;
