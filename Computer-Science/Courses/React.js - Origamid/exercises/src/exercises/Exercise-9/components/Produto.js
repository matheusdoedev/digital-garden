import React from "react";
import { Link } from "react-router-dom";
// styles
import "./Produto.css";

const Produto = ({ imagem, name, id }) => {
  return (
    <Link className="produto" to={`produto/${id}`}>
      <img src={imagem} alt={name} />
    </Link>
  );
};

export default Produto;
