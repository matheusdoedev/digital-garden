import React from "react";

// EXERCISE
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const Exercice2 = () => {
  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace("R$ ", "")) > 1500)
        .map((produto) => (
          <div
            key={produto.id}
            style={{
              margin: "0 0 41px 0",
              borderBottom: "1px solid rgba(11,11,11,0.3)",
            }}
          >
            <p>
              Nome: <span style={{ fontWeight: "700" }}>{produto.nome}</span>
            </p>
            <p>
              Preço: <span>{produto.preco}</span>
            </p>
            <ul style={{ listStyle: "none" }}>
              {produto.cores.map((cor) => (
                <li
                  key={cor}
                  style={{ background: cor, color: "white", fontWeight: "700" }}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Exercice2;
