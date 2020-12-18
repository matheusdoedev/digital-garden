import React from "react";
import Header from "../components/Header";
// styles
import "./Produtos.css";
// hooks
import useGetProducts from "../hooks/get-products";
import Produto from "../components/Produto";

const Home = () => {
  const { produtos } = useGetProducts();

  return (
    <>
      <Header />

      <main className="produtos-wrapper">
        {produtos.map((produto, index) => (
          <Produto
            key={produto.id}
            id={produto.id}
            imagem={produto.fotos[0].src}
            name={produto.nome}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
