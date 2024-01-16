import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto() {
  // Usando o hook "useParams" com o parametro que foi passado na rota dinamica.
  const { id } = useParams();

  // Função callback com os dados da API e ID dinamico
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`); // Passado o id dinamico
        const dados = await resposta.json();
        console.log(dados);
      } catch (error) {
        console.error("Erro ao carregar produto" + error);
      }
    };

    carregarDados;
  }, [id]); // Passando o id como dependencia do useEffect

  return (
    <article>
      <h2>Titulo</h2>

      <p>
        <b>Categoria:</b>
      </p>

      <p>
        <b>Preço:</b>
      </p>

      <p>Descrição</p>

      <img src="" alt="" />
    </article>
  );
}

export default DetalhesProduto;
