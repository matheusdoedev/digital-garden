import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./App";

const Produto = () => {
  const global = useContext(GlobalContext);
  console.log(global);
  return <p>Produto: </p>;
};

export default Produto;
