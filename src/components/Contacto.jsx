import React, { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto";
  });

  return (
    <div className="container">
      <h1>Contacto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
        commodi nisi. Nulla necessitatibus deserunt inventore natus impedit
        temporibus error aperiam eveniet neque vero delectus nobis officia minus
        totam dolor laboriosam accusamus asperiores amet, consequuntur, ullam
        sunt ducimus doloribus maxime. Adipisci, architecto quae eum ipsa
        quaerat quod aliquam corporis deleniti.
      </p>
    </div>
  );
};

export default Contacto;
