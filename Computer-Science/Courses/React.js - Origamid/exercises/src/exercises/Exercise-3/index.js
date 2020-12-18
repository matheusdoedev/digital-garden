import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

// DESAFIO COMPONENTES
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const Exercice3 = () => {
  const { pathname } = window.location;
  let route;

  if (pathname === "/exercise3/") {
    route = <Home />;
  } else if (pathname === "/exercise3/produtos") {
    route = <Produtos />;
  }

  console.log(pathname);

  return (
    <>
      <Header />
      {route}
    </>
  );
};

export default Exercice3;
