import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// CSS
const StyledProduto = styled.article`
  img {
    width: 200px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;

function DetalhesProduto() {
  // hook "useState" de produto
  const [produto, setProduto] = useState({});

  // Usando o hook "useParams" com o parametro que foi passado na rota dinamica.
  const { id } = useParams();

  // Função callback com os dados da API e ID dinamico
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`); // id dinamico
        const dados = await resposta.json();
        setProduto(dados);
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
      }
    };

    carregarDados();
  }, [id]); // Passando o id como dependencia do useEffect

  return (
    <StyledProduto>
      <h2>{produto.title}</h2>

      <p>
        <b>Categoria:</b> {produto.category}
      </p>

      <p>
        <b>Preço:</b> {produto.price}
      </p>

      <p>{produto.description}</p>

      <div>
        <img src={produto.image} alt="Imagem do produto" />
      </div>
    </StyledProduto>
  );
}

export default DetalhesProduto;
