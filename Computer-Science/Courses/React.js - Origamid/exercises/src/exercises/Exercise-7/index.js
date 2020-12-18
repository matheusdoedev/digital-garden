import React, { useState } from "react";
import Input from "./Input";
import "./styles.css";

// EXERCISE 7 - INPUT
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const Exercise7 = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: 0,
    cep: "",
    rua: "",
    numero: 0,
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setDados({ ...dados, [name]: value });
    console.log(dados);
  };

  const handleSubmit = async (event) => {
    try {
      await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(dados),
      });
      alert("Cadastro realizado!");
    } catch (error) {
      alert("Não foi possível fazer o cadastro, tente novamente");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          label="nome"
          value={dados.nome}
          onChange={handleChangeInput}
        />
        <Input
          type="email"
          name="email"
          label="email"
          value={dados.email}
          onChange={handleChangeInput}
        />
        <Input
          type="password"
          name="senha"
          label="senha"
          value={dados.senha}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="cep"
          label="cep"
          value={dados.cep}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="rua"
          label="rua"
          value={dados.rua}
          onChange={handleChangeInput}
        />
        <Input
          type="number"
          name="numero"
          label="numero"
          value={dados.numero}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="bairro"
          label="bairro"
          value={dados.bairro}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="cidade"
          label="cidade"
          value={dados.cidade}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          name="estado"
          label="estado"
          value={dados.estado}
          onChange={handleChangeInput}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Exercise7;
