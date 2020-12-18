import { useState, useEffect } from "react";

const useGetProducts = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((r) => setProdutos(r))
      .catch((error) => console.log(error));
  }, [produtos]);

  return { produtos };
};

export default useGetProducts;
