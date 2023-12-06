/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

// Importação dos dados da API Fake
import cursos from "../api/cursos.js";

// CSS
const StyledConteudo = styled.main`
  width: 100%;
  margin: auto;
  background-color: #83beec;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h1 {
    text-align: center;
    color: white;
    text-shadow: black 4px 2px 2px;
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

//
function Conteudo() {
  // Adicionando evento a partir da arrow fuction acionado atraves de um componente
  const exemplo2 = () => {
    alert("@_tanaka11_");
  };

  return (
    <StyledConteudo>
      <h1>Desafio Props Dinamico</h1>

      <button onClick={exemplo2}>Clique Aqui</button>

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
