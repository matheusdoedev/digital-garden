import React from "react";
import Exercise7 from "../Exercise-7";
import Select from "./Select";
import Radio from "./Radio";
import usePerguntas from "./usePerguntas";
// styles
import "./index.css";
// utils
import perguntas from "./perguntas";

const Exercise8 = () => {
  const {
    handleChangeRespostas,
    respostas,
    slide,
    handleNextQuestion,
    corretas,
  } = usePerguntas();

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            pergunta={pergunta.pergunta}
            active={slide === index}
            id={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChangeRespostas}
            onClick={handleNextQuestion}
            options={pergunta.options}
          />
        ))}
      </form>
      {slide === perguntas.length ? (
        <div>
          Você acertou {corretas} de {perguntas.length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Exercise8;
