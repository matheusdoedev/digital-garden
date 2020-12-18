import React from "react";

// EXERCISE
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  id: 0,
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  id: 1,
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercice1 = () => {
  const clientes = [luana, mario];

  const total = clientes.map((cliente) =>
    cliente.compras
      .map((item) => Number(item.preco.replace("R$ ", "")))
      .reduce((a, b) => a + b)
  );

  console.log(total);

  return clientes.map((cliente) => (
    <div key={cliente.id} style={{ marginBottom: 41 }}>
      <p>Nome: {cliente.cliente}</p>
      <p>Idade: {cliente.idade}</p>
      <ul>
        {cliente.compras.map((compra) => (
          <li>
            Item: {compra.nome}
            <br />
            Preço: {compra.preco}
          </li>
        ))}
      </ul>
      <p>
        Conta ativa:{" "}
        <span style={cliente.ativa ? { color: "green" } : { color: "red" }}>
          {cliente.ativa ? "Sim" : "Não"}
        </span>
      </p>
      <p>Total: {total[cliente.id]}</p>
      {total[cliente.id] > 10000 ? <p>Sua compra excedeu 10 mil reais</p> : ""}
      <hr />
    </div>
  ));
};

export default Exercice1;
