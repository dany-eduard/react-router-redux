import React, { useEffect } from "react";

const PaginaDos = () => {
  useEffect(() => {
    document.title = "Pagina Dos";
  });

  return (
    <div className="container">
      <h1>Pagina Dos</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
      commodi nisi. Nulla necessitatibus deserunt inventore natus impedit
      temporibus error aperiam eveniet neque vero delectus nobis officia minus
      totam dolor laboriosam accusamus asperiores amet, consequuntur, ullam sunt
      ducimus doloribus maxime. Adipisci, architecto quae eum ipsa quaerat quod
      aliquam corporis deleniti.
    </div>
  );
};

export default PaginaDos;
