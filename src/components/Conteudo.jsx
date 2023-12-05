/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

// Importação dos dados da API Fake
import cursos from "../api/cursos.js";

const StyledConteudo = styled.main`
  width: 70%;
  margin: 1rem auto;
  background-color: cornflowerblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

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
  return (
    <StyledConteudo>
      <h1>Desafio Props Dinamico</h1>

      <div className="artigos">
        {cursos.map((curso) => {
          return (
            <Artigo
              key={curso.id}
              titulo={curso.titulo}
              categoria={curso.categoria}
              preco={curso.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            />
          );
        })}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
