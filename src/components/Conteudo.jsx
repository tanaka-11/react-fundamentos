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

  .eventoPai {
    margin: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  button {
    background-color: darkblue;
    border-radius: 10px;
    color: White;
    padding: 14px;
    border: none;
    font-weight: bold;
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
  // Criado evento a partir da arrow fuction acionado atraves de um componente
  const exemplo2 = () => {
    alert("@_tanaka11_");
  };

  const exemplo3 = (valor) => {
    alert("Exemplo 3 - " + valor);
  };

  return (
    <StyledConteudo>
      <h1>Desafio Props Dinamico</h1>

      <div className="eventoPai">
        <button onClick={exemplo2}>Clique Aqui</button>
        {/* Acionando o evento Pai através do Conteudo(componente pai) com uma função intermediaria */}
        <button onClick={() => exemplo3("Evento Pai")}>Evento Pai</button>
      </div>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            // É necessário criar uma prop para passar a chamada da função no componente Filho
            handleClick={() => {
              exemplo3(curso.categoria);
            }}
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
