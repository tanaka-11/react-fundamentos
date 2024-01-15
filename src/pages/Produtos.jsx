// React Hook
import { useState } from "react";

function Produtos() {
  // O state "produtos" inicia como um array vazio e só após o carregamento dos dados da API que ele será preenchido
  const [produtos, setProdutos] = useState([]);

  // Carregando dados da Api via função assincrona
  const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error("Erro: " + error);
    }
  };

  carregarDados();

  return <h1>Produtos</h1>;
}

export default Produtos;
