import React from "react";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2>Produtos</h2>
          {produtos.map(({ nome, propriedades }) => (
            <div
              key={nome}
              style={{
                border: "2px solid rgba(10,10,10,0.5)",
                padding: 25,
                marginBottom: 25,
              }}
            >
              <h4>{nome}</h4>
              <ul>
                {propriedades.map((propriedade) => (
                  <li>{propriedade}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Produtos;
