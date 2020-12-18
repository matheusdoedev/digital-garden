import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./Header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="brand">Lojja Tech</div>
        <nav className="header-nav">
          <NavLink to="/">Produtos</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
