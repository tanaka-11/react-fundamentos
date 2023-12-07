/* Conteudo.jsx */
import { useState } from "react";
import Artigo from "./Artigo";
import styled from "styled-components";

// Importação dos dados da API Fake
import cursos from "../api/cursos.js";

// CSS
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

  .filtros {
    margin: 0.6rem;
    padding: 0.4rem;
    border-top: #2e4a7e solid 2px;
    border-bottom: #2e4a7e solid 2px;
    font-size: 22px;
    text-align: center;
    flex-wrap: wrap;
  }

  .filtros button {
    background-color: #304567;
    border-radius: 12px;
    color: white;
    padding: 12px;
    border: none;
    cursor: pointer;
    margin: 0.5rem;
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
  // Aplicando gerenciador de state para aplicação do filtro, começando como null pois nenhuma categoria começa selecionada
  const [categoria, setCategoria] = useState(null);

  // Função para aplicação de filtro
  const aplicarFiltro = (event) => {
    // Capturando o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;
    // e então passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };

  // Valor inicial do titulo
  const [titulo, setTitulo] = useState("Desafio Props Dinâmico");

  // Função para mudança no h1 atraves do setTitulo
  const mudarTitulo = () => {
    setTitulo(
      titulo === "Desafio Props Dinâmico" ? "Cursos" : "Desafio Props Dinâmico"
    );
  };

  // Gerando um novo array de cursos filtrados ou se o state for null mostre sem o filtro
  const cursosFiltrados = cursos.filter(
    (curso) => curso.categoria === categoria || categoria === null
  );

  return (
    <StyledConteudo>
      <h1 onClick={mudarTitulo}> {titulo} </h1>

      {/* Passando a função de filtros */}
      <div className="filtros">
        <p>
          <b>Filtrar por</b>
          <br />
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
        </p>

        {/* Passando uma função de curto-circuito utilizando && (renderização condicional) a tag so será exibida se o state categoria existir(não null)*/}
        {categoria && (
          <p>
            Você escolheu - <b>{categoria}</b>
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
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
