/* Cabecalho.jsx */
import { useState } from "react";
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
    text-shadow: cornflowerblue 1px 2px 1px;
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
  // Usando gerenciador de states, definindo a chamada de uma função especial do React 'useState', neste caso criamos uma variavel que representa o valor do state (titulo) e uma função responsavel pela atualização (setTitulo)

  // Valor inicial do titulo
  const [titulo, setTitulo] = useState("Olá React! 🥶");

  // Criado função para mudança no h1 atraves do setTitulo
  const mudarTitulo = () => {
    setTitulo(titulo === "Olá React! 🥶" ? "@_Tanaka11_" : "Olá React! 🥶");
  };

  return (
    <StyledCabecalho>
      <h1 onClick={mudarTitulo}> {titulo} </h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
