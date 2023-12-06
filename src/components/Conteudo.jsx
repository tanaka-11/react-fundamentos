/* Conteudo.jsx */
import { useState } from "react";

import Artigo from "./Artigo";
import styled from "styled-components";

// Importação dos dados da API Fake
import cursos from "../api/cursos.js";



const StyledConteudo = styled.main`
  width: 100%;
  background-color: #4869a5;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h1 {
    margin: 20px;
    text-align: center;
    text-shadow: black 2px 2px 2px;
    color: white;
  }

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      width: 100%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & article {
        width: 48%;
      }
    }
  }
`;

function Conteudo() {
  // Valor inicial do titulo
  const [titulo, setTitulo] = useState("Desafio Props Dinâmico");

  // Criado função para mudança no h1 atraves do setTitulo
  const mudarTitulo = () => {
    setTitulo(titulo === "Desafio Props Dinâmico" ? "Cursos" : "Desafio Props Dinâmico");
  };

  return (
    <StyledConteudo>
      

      <h1 onClick={mudarTitulo}> {titulo} </h1>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            key={curso.id}
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco}
          />
        ))}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
