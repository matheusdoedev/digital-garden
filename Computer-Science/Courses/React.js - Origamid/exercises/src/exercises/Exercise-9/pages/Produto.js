import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Produto = () => {
  const [produtoAtual, setProdutoAtual] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`// https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((r) => r.json())
      .then((r) => setProdutoAtual(r))
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <>
      <Header />

      {produtoAtual &&
        produtoAtual.map((produto) => (
          <div className="produto-atual">
            <p>{produtoAtual.nome}</p>
          </div>
        ))}
    </>
  );
};

export default Produto;
