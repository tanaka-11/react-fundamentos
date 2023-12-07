import styled from "styled-components";

// CSS
const StyledContainer = styled.main`
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
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
