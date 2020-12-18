import { useState, useEffect } from "react";
import perguntas from "./perguntas";

const usePerguntas = () => {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = useState(0);
  const [corretas, setCorretas] = useState(0);

  const handleChangeRespostas = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const handleNextQuestion = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      const corretas = perguntas.filter(
        ({ id, resposta }) => respostas[id] === resposta
      );
      setCorretas(corretas.length);
      setSlide(slide + 1);
    }
  };

  return {
    respostas,
    setRespostas,
    slide,
    setSlide,
    handleNextQuestion,
    handleChangeRespostas,
    corretas,
  };
};

export default usePerguntas;
