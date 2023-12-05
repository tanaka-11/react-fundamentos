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
function Artigo({ categoria, titulo, preco }) {
  return (
    <StyledArtigo>
      <h3>{categoria}</h3>
      <p>{titulo}</p>
      <p>{preco}</p>
    </StyledArtigo>
  );
}

export default Artigo;
