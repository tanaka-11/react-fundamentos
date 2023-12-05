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
// Versão sem Desestruturação
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

      {/* Passando props children criado no componente Conteudo */}
      {props.children}
    </StyledArtigo>
  );
}

// Versão com Desestruturação
// function Artigo({ imagem, icone, titulo, descricao, data, children }) {
//   return (
//     <StyledArtigo>
//       <div className="centralizar">
//         <img src={imagem} />
//       </div>

//       <h3>
//         <span>{icone}</span>
//         {titulo}
//       </h3>

//       <p>{descricao}</p>

//       <p>
//         <b>Data Nascimento:</b> <time>{data}</time>
//       </p>

//       {/* Passando props children criado no componente Conteudo */}
//       {children}
//     </StyledArtigo>
//   );
// }

export default Artigo;
