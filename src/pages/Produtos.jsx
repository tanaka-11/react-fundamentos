// React Hook
import { useEffect, useState } from "react";

// Importação da animação de carregamento
import Loading from "../components/Loading";
import styled from "styled-components";

// Link das rotas
import { Link } from "react-router-dom";

// CSS
const StyledProdutos = styled.article`
  p {
    color: white;
  }

  b {
    color: black;
  }

  a {
    text-decoration: none;
    color: darkred;
  }
`;

function Produtos() {
  // O state "produtos" inicia como um array vazio e só após o carregamento dos dados da API que ele será preenchido
  const [produtos, setProdutos] = useState([]);

  // State de "loading" com boolean
  const [loading, setLoading] = useState(true);

  /* Gerenciando o efeito colateral do componente com o useEffect atraves de uma função callback para o carregamento de dados da API

   Funcionamento do useEffect
   1º useEffect é carregado uma vez apos a montagem da page.
   2º ele executa a função "carregarDados"
   3º atualização do state
  */
  useEffect(() => {
    // Carregando dados da API via função assincrona
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);

        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.error("Erro: " + error);
      }
    };

    carregarDados();
  }, []); // Apos o 1º parametro(função) passar o 2º parametro(lista de dependencias)

  return (
    <StyledProdutos>
      <h1>Produtos</h1>

      {/* Exibindo dados atraves do state com o loop map e metodo de loading com itenario (Se carregamento for verdadeiro então mostre o paragrafo, senão mostre os dados atraves do map)*/}
      {loading ? (
        <Loading />
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>Produto: {produto.title}</h3>

              <p>
                <b>Preço:</b> {produto.price}
              </p>

              <p>
                <b>Descrição:</b> {produto.description}
              </p>

              {/* Link de rota dinamica */}
              <p>
                <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
              </p>
              <br />
              <hr />
            </section>
          );
        })
      )}
    </StyledProdutos>
  );
}

export default Produtos;
