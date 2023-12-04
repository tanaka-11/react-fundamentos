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
`;

function Artigo() {
  return (
    <StyledArtigo>
      <h3>Tanaka</h3>
      <p>Mol breck</p>
    </StyledArtigo>
  );
}

export default Artigo;
