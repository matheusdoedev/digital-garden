import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import Contato from "./pages/Contato";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Produtos} />
        <Route path="produto/:id" component={Produto} />
        <Route path="contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
