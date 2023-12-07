/* Menu.jsx */
import styled from "styled-components";

// Importação do nav do react router
import { NavLink } from "react-router-dom";

const StyledMenu = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    /* & -> referência ao
    seletor pai (a) */
    &:hover {
      background-color: cornflowerblue;
      color: black;
      transform: scale(1.05);
      padding: 1rem;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </StyledMenu>
  );
}

export default Menu;
