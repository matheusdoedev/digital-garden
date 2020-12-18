import React, { useState } from "react";
import "./styles.css";

// EXERCISE 4 - useState
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Exercice4 = () => {
  const [state, setState] = useState(null);
  const [produtoAtual, setProdutoAtual] = useState(null);

  const handleClick = async (event) => {
    const produto = event.target.innerText;
    setState("carregando");
    if (state === "carregando") {
      setProdutoAtual(() => <div>Carregando...</div>);
    }
    const response = Array(
      await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`
      ).then((r) => r.json())
    );
    setState(true);
    setProdutoAtual(
      response.map(({ id, nome, preco, descricao }) => (
        <div key={id}>
          <p>Nome: {nome}</p>
          <p>Preço: {preco}</p>
          <p>Descrição: {descricao}</p>
        </div>
      ))
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {state === "carregando" ? <div>Carregando...</div> : produtoAtual}
    </div>
  );
};

export default Exercice4;
