import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>Logo</div>
        <nav>
          <a href="/exercise3/">Home</a>
          <a href="/exercise3/produtos">Produtos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
