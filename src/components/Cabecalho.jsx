/* Cabecalho.jsx */
import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";

// Formatando CSS com Tagged Template
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: cornflowerblue;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      {/* Manipulando evento diretamente pelo componente com uma arrow fuction para fazer a intermediação */}
      <h1 onClick={() => alert("@_tanaka11_ segue nois")}>
        Olá React! - @_Tanaka11_ 🥶
      </h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
