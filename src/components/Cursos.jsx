/* React Hook */
import { useState } from "react";

// Importação do artigo e styled
import Artigo from "./Artigo.jsx";
import styled from "styled-components";

// Importação dos dados da API Fake
import cursos from "../api/cursos.js";

// CSS
const StyledCursos = styled.section`
  .filtros {
    margin: 0.6rem;
    padding: 0.4rem;
    border-top: #2e4a7e solid 2px;
    border-bottom: #2e4a7e solid 2px;
    font-size: 24px;
    text-align: center;
    text-shadow: #3f5e7d 1px 2px 1px;
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

function Cursos() {
  // Aplicando gerenciador de state para aplicação do filtro, começando como null pois nenhuma categoria começa selecionada
  const [categoria, setCategoria] = useState(null);

  // Função para aplicação de filtro
  const aplicarFiltro = (event) => {
    // Capturando o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;
    // e então passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };

  // Função limpaFiltro
  const limparFiltro = () => {
    setCategoria(null);
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

  // Função de contagem de cursos
  const quantidade = cursosFiltrados.length;

  return (
    <StyledCursos>
      <h1 onClick={mudarTitulo}> {titulo} </h1>

      <div className="filtros">
        <p>
          <b>Filtrar por</b>
          <br />
          {/* Passando a função de filtros */}
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Banco de Dados</button>

          {categoria && (
            <button
              onClick={limparFiltro}
              style={{ backgroundColor: "darkred" }}
            >
              Limpar Filtro 🧼
            </button>
          )}
        </p>

        {/* Passando uma função de curto-circuito utilizando && (renderização condicional) a tag so será exibida se o state categoria existir(não null)*/}
        {categoria && (
          <p style={{ textAlign: "center" }}>
            Você escolheu - <b>{categoria}</b>
          </p>
        )}

        {/* Se quantidade de cursos for igual a 0 mostre a mensagem */}
        {quantidade === 0 && (
          <p style={{ color: "darkred", textAlign: "center" }}>
            Não há cursos desta categoria!
          </p>
        )}

        <p>
          Quantidade de cursos: <b>{quantidade}</b>
        </p>
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
    </StyledCursos>
  );
}

export default Cursos;
