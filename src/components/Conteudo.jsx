/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

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
  const dataNascimento = ["10/11/2001", "04/03/2003", "27/07/2001"];

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
        <Artigo
          icone="🥶"
          titulo="Tanaka"
          descricao="Mol Breck em busca de vitoria"
          data={dataNascimento[0]}
        />

        <Artigo
          icone="😴"
          titulo="Kogici"
          descricao="Pretinha linda com sono acumulado"
          data={dataNascimento[1]}
        />

        <Artigo
          icone="🦾"
          titulo="Nando"
          descricao="Maromba noia com sindrome de heroi"
          data={dataNascimento[2]}
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
