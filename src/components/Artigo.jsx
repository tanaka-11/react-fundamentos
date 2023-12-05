import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: white;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: darkblue;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// Definindo (Props) para o componente
function Artigo(props) {
  return (
    <StyledArtigo>
      <div className="centralizar">
        <img src={props.imagem} />
      </div>

      <h3>
        <span>{props.icone}</span>
        {props.titulo}
      </h3>

      <p>{props.descricao}</p>

      <p>
        <b>Data Nascimento:</b> <time>{props.data}</time>
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
