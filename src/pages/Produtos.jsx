// React Hook
import { useEffect, useState } from "react";

function Produtos() {
  // O state "produtos" inicia como um array vazio e só após o carregamento dos dados da API que ele será preenchido
  const [produtos, setProdutos] = useState([]);

  // Gerenciando o efeito colateral do componente com o useEffect atraves de uma função callback para o carregamento de dados da API

  /* Funcionamento do useEffect
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
      } catch (error) {
        console.error("Erro: " + error);
      }
    };

    carregarDados();
  }, []); // Apos o 1º parametro(função) passar o 2º parametro(lista de dependencias)

  return (
    <article>
      <h1>Produtos</h1>

      {/* Exibindo dados atraves do state com o loop map */}
      {produtos.map((produto) => {
        return (
          <section key={produto.id}>
            <h3>Produto: {produto.title}</h3>

            <p>
              <b>Preço:</b> {produto.price}
            </p>

            <p>
              <b>Descrição:</b> {produto.description}
            </p>
            <br />
          </section>
        );
      })}
    </article>
  );
}

export default Produtos;
