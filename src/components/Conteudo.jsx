/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

// Importando os assets de imagens
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

const StyledConteudo = styled.main`
  width: 90vw;
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
      display: flex;
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  const dataNascimento = ["10/11/2001", "12/03/2004", "27/07/2001"];

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {/* Passando props manualmente */}
        <Artigo
          imagem={imagem1}
          icone="🥶"
          titulo="Tanaka"
          descricao="Mol Breck em busca de vitoria"
          data={dataNascimento[0]}
        >
          {/* Passando props children */}
          <h4>Hobbys</h4>
          <ul>
            <li>Andar de bike</li>
            <li>Jogar vôlei</li>
            <li>Programar</li>
          </ul>
        </Artigo>

        <Artigo
          imagem={imagem2}
          icone="😴"
          titulo="Kogici"
          descricao="Pretinha linda com sono acumulado"
          data={dataNascimento[1]}
        >
          <h4>Irmãos</h4>
          <ol>
            <li>Julia</li>
            <li>Aline</li>
            <li>Yasmin</li>
            <li>Ivan</li>
            <li>Sophia</li>
          </ol>
        </Artigo>

        <Artigo
          imagem={imagem3}
          icone="🦾"
          titulo="Nando"
          descricao="Maromba noia com sindrome de heroi"
          data={dataNascimento[2]}
        >
          <section>
            <h4>O Maromba da Vila Prudente</h4>
            <details>
              <summary>Capitulo 1</summary>
              <p>A vinda do Maranhão</p>
            </details>

            <details>
              <summary>Capitulo 2</summary>
              <p>A entrada no Pantoja</p>
            </details>
          </section>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
