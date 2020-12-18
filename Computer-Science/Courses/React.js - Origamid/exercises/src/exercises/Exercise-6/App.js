import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
