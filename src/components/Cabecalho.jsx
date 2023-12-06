/* Cabecalho.jsx */
import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";

// Formatando com Tagged Template
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  h1 {
    padding: 20px;
  }

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
      <h1>Olá React! - @_Tanaka11_ 🥶</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
