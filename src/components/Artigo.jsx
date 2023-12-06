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

// Props com Desestruturação
function Artigo(props) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo>
      <h3> {props.categoria} </h3>

      <p>
        <b>Curso:</b> {props.titulo}
      </p>

      <p>
        <b>Preço:</b> {formatarPreco(props.preco)}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
